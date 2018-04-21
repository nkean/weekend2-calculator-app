const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const calculate = require('./modules/calculate');
calcHistory = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/history', (req,res) => {
    res.send(calcHistory);
});

app.post('/calculate', (req, res) => {
    let newCalc = calculate(req.body);
    calcHistory.push(newCalc);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`server up on port: ${PORT}`)
});