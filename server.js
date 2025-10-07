// server.js
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir, { maxAge: '1h', extensions: ['html'] }));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

// Descobre a porta injetada pela KingHost
function getPort() {
  if (process.env.PORT) return Number(process.env.PORT);
  // procura uma variável tipo PORT_SERVER, PORT_APP etc.
  for (const [k, v] of Object.entries(process.env)) {
    if (k.startsWith('PORT')) return Number(v);
  }
  return 5173; // fallback local
}

const port = getPort();
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on ${port}`);
});
