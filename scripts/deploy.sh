#!/bin/sh

echo "🧹 Cleaning up temp directory"
rm -rf /tmp/nicholemattera

echo "📦 Downloading the latest"
git clone --depth 1 https://github.com/NicholeMattera/NicholeMattera.gay.git /tmp/nicholemattera
cd /tmp/nicholemattera

echo "🛠️ Building"
docker compose build --no-cache

echo "🪦 Bringing down and removing old container"
docker container stop nicholemattera-nicholemattera-1
docker container rm nicholemattera-nicholemattera-1

echo "💡 Bringing up new container"
docker compose up --detach

echo "🧹 Cleaning up old images and temp directory"
docker image prune --all --force
rm -rf /tmp/nicholemattera
