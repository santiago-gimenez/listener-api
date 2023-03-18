let express = require('express');
// let opSys = require('os');
let app = express();

app.get('/', function(req, res) {
    let request = {
        headers: req.headers,
        body: req.body,
        method: req.method
    };
    console.log(request);
    res.json({message: 'Ok'})
})

app.post('/', function(req, res) {
    let request = {
        headers: req.headers,
        body: req.body,
        method: req.method
    };
    console.log(request);
    res.json({message: 'Ok'})
})

app.listen(3000);
console.log(`Listening on localhost:3000`);