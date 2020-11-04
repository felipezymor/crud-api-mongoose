import express from 'express';
import mongoose from 'mongoose';
import {bookRouter} from './routes/bookRouter.js';

//connect to MongoDB with Mongoose
(async () => {
    try {
        mongoose.connect("mongodb+srv://dbHMF:<password>@cluster0.nmp7k.mongodb.net/books?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('Connected to MongoDB with Mongoose');
    } catch (error) {
        console.log('Erro ao inserir');
    }
})();

const app = express();

app.use(express.json());
app.use(bookRouter);

app.listen(3000, () => console.log('API Started'));