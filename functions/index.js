const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const request = require('request');
const fs = require('fs');

const app = express();

//View engine set up to us handlebar
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



let data = fs.readFileSync('data/farmlands.geojson');
let farms = JSON.parse(data);

let data2 = fs.readFileSync('data/oyo-boundries.geojson');
let oyo_bound = JSON.parse(data2);


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/animated', (req, res) => {
    res.render('animated')
})

app.get('/flood', (req, res) => {
    res.render('flood')
})

// Sending data
app.get('/farms', (req, res) => {
    res.send(farms)
})

app.get('/oyo-bound', (req, res) => {
    res.send(oyo_bound)
})

// End Sending data

// app.get('**', (req, res) => {
// res.status(404).redirect('404.html')
// })


exports.app = functions.https.onRequest(app);