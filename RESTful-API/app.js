const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const { stringify } = require("qs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikidb", {useNewUrlParser: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("Article", articleSchema);

//////////////////////////Requests Targetting all Articles////////////////////////////

app.get("/articles", function(req, res){
    Article.find(function(err, foundArticles){
        if(!err){
            res.send(foundArticles);
        } else {
            res.send(err);
        }
        
    });
});

app.post("/articles", function(req,res){

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if(!err){
            res.send("Successfullt added a new item")
        } else {
            res.send(err);
        }
    })
});

app.delete("/articles", function(req,res){
    Article.deleteMany(function(err){
        if (!err){
            res.send("Successfully deleted all articles.");
        } else {
            res.send(err);
        }
    })
})


//////////////////////////Requests Targetting a specific Articles////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req,res){

    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
        if(foundArticle) {
            res.send(foundArticle)
        } else {
            res.send("No Articles matching that title was found.")
        }
    })
});

.put(function(req,res){
    Article.update(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true},
        function(err){
            if(!err){
                res.send("Successfully updated article.")
            }
        }
    )
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});