# ベースイメージとして Node.js (Alpine版)を使用
FROM node:18-alpine

# 作業ディレクトリを /app に設定
WORKDIR /app

# package.json と package-lock.json を先にコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# 残りのソースコードをコピー
COPY . .

# ビルド (開発段階で必要に応じて)
# RUN npm run build

# ポートを開放
EXPOSE 3000

# コンテナ起動時にNext.js開発サーバを起動
CMD ["npm", "run", "dev"]
