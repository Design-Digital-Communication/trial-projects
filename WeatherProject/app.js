const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
    });

    app.post("/", function(req, res){
        const query = req.body.cityName;
        const apikey = "c2c7774d44bac2c045b754dd82cb6e2b";
        const url = "api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + ""

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0];
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn" + icon +"@2x.png";
            res.write("<p>The weather is currently" + weatherDescription + "<p>");
            res.write("<h1>The temperature in "+query+" is" + temp + "degrees Celcius<h1>");
            res.write("<img src=" + imageURL +">");
            res.send();
    });
});
})


    app.listen(3000, function(){
        console.log("Server is running on port 3000");
    })

/*  const query = "beaumont";
    const apikey = "c2c7774d44bac2c045b754dd82cb6e2b";
    const url = "api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + ""

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0]
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn" + icon +"@2x.png";
            res.write("<p>The weather is currently" + weatherDescription + "<p>");
            res.write("<h1>The temperature in Beaumont is" + temp + "degrees Celcius<h1>");
            res.write("<img src=" + imageURL +">");
        }) */

/* npx nodemon app.js */