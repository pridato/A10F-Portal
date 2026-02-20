#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v pnpm &> /dev/null; then
  echo "❌ pnpm no está instalado. Instálalo con: npm install -g pnpm"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "📦 Instalando dependencias..."
  pnpm install
fi

echo "🚀 Iniciando servidor de desarrollo..."
pnpm dev
