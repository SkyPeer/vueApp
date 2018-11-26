const express = require('express'),
    helmet = require('helmet'),
    path = require('path'),
    compression = require('compression'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    bodyParser = require('body-parser'),
    fs = require('fs');

app.use(helmet());
app.use(compression());

app.get('/api/users/select', function(req, res, next){
    res.sendFile('default.json', {root: __dirname});
    //res.header('Access-Control-Allow-Origin', '*');
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', (req, res, next) => {
    // console.log('send default')
    res.sendFile('index.html', {root: __dirname})
});

server.listen(3000, function () {
    console.log(`redApp Start http://localhost:3000`);
});
