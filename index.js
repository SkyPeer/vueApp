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

let jsonArray = require("./bigData.json");
//console.log(JSON.parse(jsonArray)[1]);


app.post('/api/users/select', bodyParser.json(), function (req, res, next) {
    let {page, text} = req.body.params;
    res.json(getRequest(page, text))
    //res.header('Access-Control-Allow-Origin', '*');

});
let filtered = [] ;

function getRequest(page, text) {

    if (text) {
        let pattern = new RegExp(text, 'i');
        filtered = jsonArray.filter(item => {
            return (item.id).toString().match(pattern) || item.name.match(pattern) || item.email.match(pattern) || item.language.match(pattern) || (item.payment).toString().match(pattern)
        })

    }
    else{
        filtered = jsonArray;
    }
    let begin = (page - 1) * 100;
    let end = begin + 100;
    return filtered.slice(begin, end);
}

app.get('/api/users/total', function (req, res, next) {
    res.json({total: filtered.length});
});


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/', (req, res, next) => {
    // console.log('send default')
    res.sendFile('index.html', {root: __dirname})
});

server.listen(3300, function () {
    console.log(`vueApp Start http://localhost:3300`);
});
