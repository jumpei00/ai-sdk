# ai-agent

AI SDK を使用したチャット API サーバーです。

## 技術スタック

- **フレームワーク**: [Hono](https://hono.dev/)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- **LLM プロバイダー**: OpenAI

## セットアップ

### 1. 環境変数の設定

`.env` ファイルを作成し、OpenAI APIキーを設定してください：

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 開発サーバーの起動

```bash
pnpm dev
```

サーバーが http://localhost:3000 で起動します。

## API エンドポイント

### POST /api/chat

チャットメッセージを送信し、AIからのストリーミングレスポンスを受け取ります。

**リクエストボディ:**

```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ]
}
```

**レスポンス:** Server-Sent Events (SSE) によるストリーミングレスポンス
