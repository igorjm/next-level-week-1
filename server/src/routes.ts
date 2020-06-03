import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  console.log('list users');

  res.json(['igor', 'nicolas']);
});

export default routes;
