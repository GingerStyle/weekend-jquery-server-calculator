const express = require('express');
const {evaluate} = require('mathjs');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port', port);
});

let result = 0;

//routes
app.post('/calculation', function(req, res){
    console.log('server received:', req.body.string);
    let equation = req.body.string;
    result = evaluate(equation);
    console.log('result now =',result);
    
});

app.get('/calculation', function(req, res){
    res.send(String(result));
});