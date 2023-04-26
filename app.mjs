import express from 'express';
import { generateImage } from './img.mjs';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

// Set up CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;
  const result = await generateImage(prompt);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
