import express from 'express';
import cors from 'cors';
import client from './database/index.js';
import { createBooks, getBooks, updateBooks, deleteBooks } from './queries/index.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

client.connect();

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
});

//create
app.post('/books', createBooks);

//read
app.get('/books', getBooks);

//update
app.patch('/books/:id', updateBooks);
//delete
app.delete('/books/:id', deleteBooks);


app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
