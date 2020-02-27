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

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/oyo-farms', (req, res) => {
    res.render('oyo-farms')
})

app.get('/team', (req, res) => {
    res.render('team')
})

app.get('/flood-area', (req, res) => {
    res.render('flood-area')
})

app.get('/ibadan-overview', (req, res) => {
    res.render('ibadan-overview')
})

app.get('/flood-mapping', (req, res) => {
    res.render('flood-mapping')
})

app.get('/summary', (req, res) => {
    res.render('summary')
})

app.get('/intervention', (req, res) => {
    res.sendFile('intervention.html')
})


exports.app = functions.https.onRequest(app);