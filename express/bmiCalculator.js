const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    var h = Number(req.body.h);
    var m = Number(req.body.m);

    var result = Math.floor(m / h*h);

    res.send("The result of the calculation is " + result);
})

app.listen(3000, function(){
    console.log('server has started on port 3000')
});

/*npx nodemon calculator.js */