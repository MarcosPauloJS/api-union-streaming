const express = require('express');
const app = express();

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