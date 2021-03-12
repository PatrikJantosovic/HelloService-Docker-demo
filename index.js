const express = require('express');

const app = express();

const port = 1337;

app.listen(port, () => {
    console.log('server on port 1337');
})

app.get('/', function(req, res) {
    return res.send('Hello');
})

app.get('/:name', function(req, res) {
    return res.send('Hello ' + req.params.name);
})