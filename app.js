import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! this is new change');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
