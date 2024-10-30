const express = require('express');
const app = express();

let books = [
    { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', year: 1869 }
];

let cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2021 }
];

app.post('/books/add', (req, res) => {
    res.send('Book added');
});

app.get('/books/list', (req, res) => {
    res.json(books);
});

app.put('/books/update', (req, res) => {
    res.send('Book Updated');
});

app.delete('/books/delete', (req, res) => {
    res.send('Book deleted');
});


app.post('/cars/add', (req, res) => {
    res.send('Car added');
});

app.get('/cars/list', (req, res) => {
    res.json(cars);
});

app.put('/cars/update', (req, res) => {
    res.send('Car Updated');
});

app.delete('/cars/delete', (req, res) => {
    res.send('Car deleted');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});