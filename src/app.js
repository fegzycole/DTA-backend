import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import routes from './routes/product';

config();

const app = express();

app.use(bodyParser.json());

app.use('/products', routes)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to my implementation of the Ven10 challenge'
  })
})

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
