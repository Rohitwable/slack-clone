import express from 'express'
const app = express()
import SERVER from './schema.js';

SERVER.applyMiddleware({
    app: app
  });

const PORT = 4000 || process.env;

app.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
  });

