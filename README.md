# Assistente Inteligente de Análise de Empresas

Aplicação que detalha informações sobre uma empresa de interesse do usuário, apresentando análises e dados relevantes para a tomada de decisão.

## Stacks
- React
- Vite
- Node.js
- Express
- Docker
- Docker Compose
- Gemini (IA)

## Como rodar a aplicação

### 1. Pela linha de comando sem Docker

#### Frontend
```powershell
cd ".\Desafio_WebAnalysis\Frontend\desafio-wa"
npm install
npm run dev
```

Abra no navegador:
- `http://localhost:5173`

#### Backend
```powershell
cd ".\Desafio Levi\Desafio_WebAnalysis\Backend"
npm install
npm start
```

O backend ficará disponível em:
- `http://localhost:3000`

### 2. Com Docker Compose

No diretório principal do projeto:
```powershell
cd ".\Desafio_WebAnalysis\"
docker compose up --build
```

Acesse o frontend em:
- `http://localhost:5173`

## Descrição rápida
O projeto funciona como um assistente inteligente para análise de empresas, onde o usuário pode informar uma empresa de interesse e receber informações detalhadas sobre ela. O frontend é responsável pela interface React/Vite e o backend por fornecer a API em Node.js/Express.

