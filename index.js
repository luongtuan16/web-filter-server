const express = require("express");


const webRoute = require('./route/webRoute');

const cors = require('cors');

const app = express();

app.use(cors({
    origin: true
}));

require('dotenv').config();

app.use('/api', webRoute);

var model;
const loadModel = async () => {
    model = await tf.loadLayersModel('../mc-models/model_vgg.keras');
}
loadModel();

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})