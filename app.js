import express from 'express';
import mongoose from 'mongoose';
import {bookRouter} from './routes/bookRouter.js';
require('dotenv').config();

//connect to MongoDB with Mongoose
(async () => {
    try {
        mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.USERPW}@cluster0.nmp7k.mongodb.net/books?retryWrites=true&w=majority`, {
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

app.listen(process.env.PORT, () => console.log('API Started'));