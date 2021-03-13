const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("contact me at : you@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I am Bullahh.. Blahh...Bulla..!");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>hear</li><li>beer</li><li>tear</li></ul>");
});

app.listen(3000, function(){
    console.log('server has started on port 3000');
});