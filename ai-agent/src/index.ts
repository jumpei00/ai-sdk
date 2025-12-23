import { serve } from "@hono/node-server";
import { type UIMessage, convertToModelMessages, streamText } from "ai";
import { Hono } from "hono";
import { cors } from "hono/cors";
import "dotenv/config";
import { openai } from "@ai-sdk/openai";

const app = new Hono();

app.use(
	"/api/*",
	cors({
		origin: "http://localhost:5173",
		allowHeaders: ["Content-Type"],
		allowMethods: ["POST"],
	}),
);

app.post("/api/chat", async (c) => {
	const { messages }: { messages: UIMessage[] } = await c.req.json();
	const result = streamText({
		model: openai("gpt-5"),
		messages: convertToModelMessages(messages),
	});
	return result.toUIMessageStreamResponse();
});

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
