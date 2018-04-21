const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

calcHistory = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculate', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`server up on port: ${PORT}`)
});