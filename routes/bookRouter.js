import express from 'express';
import {bookModel} from '../models/bookModel.js'

const app = express();

//Create
app.post('/book', async (req, res) => {
    try {
        const book = new bookModel(req.body);
        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Retrieve
app.get('/book', async (req, res) => {
    try {
        const book = await bookModel.find({});
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update
app.patch('/book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const book = await bookModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete
app.delete('/book/:id', async (req, res) => {
    try {
        const book = await bookModel.findByIdAndDelete({_id: req.params.id});
        if(!book) {
            res.status(404).send('Documento não encontrado')
        } else {
            res.status(200).send('Documento deletado');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export {app as bookRouter};