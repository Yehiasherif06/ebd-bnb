
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Ebd-Bnb!');
});

app.listen(PORT, () => {
  console.log(`Ebd-Bnb is running at http://localhost:${PORT}`);
});
