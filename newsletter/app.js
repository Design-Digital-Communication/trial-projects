const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const firstName = req.body.fistname;
    const lastName = req.body.lastname;
    const email = req.body.email;

    console.log(firstName,lastName, email);


var data = {
    members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
    ]
};


const jasonData = JSON.stringify(data);

const url = 

https.request(url, options, function(response) {


})


});

app.listen(3000, function(){
    console.log('server has started on port 3000');
});


//npn init
//npm install
//npm install body-parser express request