const express = require('express');
const app = express();

let books = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];


app.get('/welcome', (req, res) => {
  res.send('Welcome');
});

app.get('/list', (req, res) => {
  res.json(books);  
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
