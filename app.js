import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
