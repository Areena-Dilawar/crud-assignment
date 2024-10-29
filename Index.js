const express = require('express');
const app = express();
app.use(express.json());
let books = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

app.post('/add', (req, res)=>{
const newbook = {
    id: books.length+1,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
};
books.push(newbook)
req.send('Book added successfully')
});

app.get('/list', (req, res) => {
  res.json(books);  
});
  
app.listen(8000, () => {
  console.log('Server is running on port 8000');
})