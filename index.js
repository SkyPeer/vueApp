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

let jsonArray = fs.readFileSync("default.json");
//console.log(JSON.parse(jsonArray)[1]);


app.post('/api/users/select', bodyParser.json(), function(req, res, next){
    //console.log('SearchbyTicketNumber req.body', req.body.params.page);
    res.json(getRequest(req.body.params.page))
    //res.sendFile('default.json', {root: __dirname});
    //res.header('Access-Control-Allow-Origin', '*');

});

function getRequest (page){
    let array = JSON.parse(jsonArray);
    let req = [];
    let first = page !== 1 ? ((page-1)*10) : 0;
    let last = page * 10;

    for(let i=first; i < last; i++){
        req.push(array[i])
    }
    console.log('req.length = ', req.length, 'first:', first, 'last:',last);
    return req
}

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', (req, res, next) => {
    // console.log('send default')
    res.sendFile('index.html', {root: __dirname})
});

server.listen(3000, function () {
    console.log(`redApp Start http://localhost:3000`);
});
