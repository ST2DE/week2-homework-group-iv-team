const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('index')
})

app.get('/yuting', function (req, res) {
    res.render('rainstop');
})

app.get('/judy', function (req, res) {
    res.render('judy');
})

app.get('/mike', function (req, res) {
    res.render('mike');
})

app.listen(3000, function () {
    console.log('The server has been run on http://localhost:3000/');
});




