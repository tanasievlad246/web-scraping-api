import express, { Express, json } from 'express';

const app: Express = express();

app.use(json());

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'Resource not found',
  });
});

app.listen(3000, () => console.log('Server running'));
