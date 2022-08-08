
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { mongoose } = require('./db');
const auth = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

app.use('/',auth);

app.listen(8000,()=>{
    console.log('server connected');
})