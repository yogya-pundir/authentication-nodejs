const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authentication',(err) =>{
    if(err){
        console.log('error',err);
    }
    else{
        console.log('db connected successfully');
    }
})
module.exports = mongoose;