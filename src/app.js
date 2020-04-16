const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const serviceControllers = require('./controllers/servicesController')
const searchMediaControllers = require('./controllers/searchMediaController')

app.use(express.json())

app.get('/', (request, response)=>{
    response.send('Api Union Streaming');
})

// routes

app.get('/services', serviceControllers.index);
app.get('/searchmedia', searchMediaControllers.index);


app.listen(3333);