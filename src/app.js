import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

config();

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
