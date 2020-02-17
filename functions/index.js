const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const request = require('request');
const app = express();

app.use(express.urlencoded({ extended: false }))

//View engines
app.engine('.hbs', expressHbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');



// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));



app.get('/', (req, res) => {
    res.render('index')
})


app.get('**', (req, res) => {
res.status(404).redirect('404.html')
})


exports.app = functions.https.onRequest(app);