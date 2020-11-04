 import mongoose from 'mongoose';
 
 //model creation
 const terrorSchema = mongoose.Schema({
    author: {
        type: String,
        require: true
    },  
    name: {
        type: String,
        require: true
    },  
    gender: {
        type: String,
        require: true
    },
    resume: {
        type: String,
        require: false
    },  
    price: {
        type: Number,
        require: true,
        min: 0
    },  
  });

  const bookModel = mongoose.model('terror', terrorSchema, 'terror');

  export {bookModel};