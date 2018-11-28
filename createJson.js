const
    fs = require('fs'),
    defaultArray = require('./default');

const languages = ['ALGOL', 'LISP', 'COBOL','C#', 'PYTHON', 'JAVA', 'JAVASCRIPT', 'RUBY', 'QBASIC', 'ASSAMBLER', 'PASCAL'];

function getRandom(min, max)
{
    return parseInt(Math.random() * (max - min) + min);
}

let bigData = [];

for ( let i=0; i<5253; i++ ){

    let person = defaultArray[getRandom(0, defaultArray.length)];

    bigData.push({
            id: i+1,
            //age: getRandom(20, 35),
            language: languages[getRandom(0, languages.length)],
            name: person.name,
            email: person.email,
            payment: getRandom(18, 174),
    })
}

let data = JSON.stringify(bigData, null, 2);
fs.writeFileSync('bigData.json', data);

let jsonArray = require("./bigData.json");
console.log(jsonArray.length);