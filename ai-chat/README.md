# ai-chat

AI SDK を使用したチャット UI フロントエンドです。

## 技術スタック

- **フレームワーク**: React + TypeScript
- **ビルドツール**: [Vite](https://vite.dev/)
- **AI SDK**: [@ai-sdk/react](https://sdk.vercel.ai/docs)

## セットアップ

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. 開発サーバーの起動

```bash
pnpm dev
```

アプリケーションが http://localhost:5173 で起動します。

## 使用方法

1. バックエンド（ai-agent）が http://localhost:3000 で起動していることを確認
2. ブラウザで http://localhost:5173 を開く
3. テキストボックスにメッセージを入力して送信

## 主要コンポーネント

### useChat フック

`@ai-sdk/react` の `useChat` フックを使用してチャット機能を実装しています：

```tsx
const { messages, sendMessage, status } = useChat({
  transport: new DefaultChatTransport({
    api: "http://localhost:3000/api/chat",
  }),
});
```
