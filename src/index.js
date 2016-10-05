import express from 'express';
import graphQLHttp from 'express-graphql';

import schema from './schema';

const app = express();

app.use(graphQLHttp({
  schema,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('Server listening on 3000');
})
