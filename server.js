// server.js
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Pasta estática gerada pelo Vite
const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// SPA fallback (react-router-dom): qualquer rota volta para index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const port = process.env.PORT || 5173; // KingHost injeta PORT
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
