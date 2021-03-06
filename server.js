const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/yuting', function (req, res) {
    res.sendFile(__dirname + '/yuting.html');
})

app.get('/judy', function (req, res) {
    res.sendFile(__dirname + '/judy.html');
})

app.get('/mike', function (req, res) {
    res.sendFile(__dirname + '/mike.html');
})

app.listen(3000, function () {
    console.log('The server has been run on http://localhost:3000/');
});




