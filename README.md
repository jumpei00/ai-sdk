# AI SDK Demo

Vercel AI SDK を使用したチャットアプリケーションのデモプロジェクトです。

## プロジェクト構成

```
ai-sdk/
├── ai-agent/    # バックエンド API サーバー
├── ai-chat/     # フロントエンド チャット UI
└── README.md
```

### ai-agent（バックエンド）

- **フレームワーク**: [Hono](https://hono.dev/)
- **AI SDK**: [@ai-sdk/openai](https://sdk.vercel.ai/docs)
- **ポート**: 3000

OpenAI APIを使用してチャットのストリーミングレスポンスを提供するAPIサーバーです。

### ai-chat（フロントエンド）

- **フレームワーク**: React + TypeScript
- **ビルドツール**: [Vite](https://vite.dev/)
- **AI SDK**: [@ai-sdk/react](https://sdk.vercel.ai/docs)
- **ポート**: 5173

`useChat` フックを使用したシンプルなチャットUIです。

## セットアップ

### 1. 環境変数の設定

`ai-agent` ディレクトリに `.env` ファイルを作成し、OpenAI APIキーを設定してください：

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

### 2. 依存関係のインストール

```bash
# バックエンド
cd ai-agent
pnpm install

# フロントエンド
cd ../ai-chat
pnpm install
```

### 3. 開発サーバーの起動

```bash
# ターミナル1: バックエンド
cd ai-agent
pnpm dev

# ターミナル2: フロントエンド
cd ai-chat
pnpm dev
```

### 4. アプリケーションにアクセス

ブラウザで http://localhost:5173 を開いてチャットを開始します。

## 技術スタック

| 項目 | バックエンド (ai-agent) | フロントエンド (ai-chat) |
|------|------------------------|-------------------------|
| 言語 | TypeScript | TypeScript |
| ランタイム | Node.js | Browser |
| フレームワーク | Hono | React |
| AI SDK | ai, @ai-sdk/openai | ai, @ai-sdk/react |
| パッケージマネージャー | pnpm | pnpm |
