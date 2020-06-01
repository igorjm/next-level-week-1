import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('list users');

  res.json(['igor', 'nicolas']);
});

app.listen(3333);
