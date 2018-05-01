const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.sendFile('/page/index.html', { root: __dirname });
})

app.get('/yuting', function (req, res) {
    res.sendFile('/page/yuting.html', { root: __dirname });
})

app.get('/judy', function (req, res) {
    res.sendFile('/page/judy.html', { root: __dirname });
})

app.get('/mike', function (req, res) {
    res.sendFile('/page/mike.html', { root: __dirname });
})

app.listen(3000, function () {
    console.log('The server has been run on http://localhost:3000/');
});




