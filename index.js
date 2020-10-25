'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
var persona_routes = require('./routes/personaRoute');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/api',persona_routes);

mongoose.connect('mongodb+srv://nicolasruiz:nicolas123@cluster0.2996l.mongodb.net/desarrollo?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
        process.exit();
    }
    app.listen(5000, () => {

        console.log("Esta corriendo en puerto 5000")
    })
})