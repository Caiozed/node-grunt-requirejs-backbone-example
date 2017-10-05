var express = require("express");
var app = express();
var pug = require("pug");
var mysql = require("mysql");
var bodyParser = require("body-parser")
var port = process.env.PORT;

var con = mysql.createConnection({
  host: process.env.IP,
  user: "caiozed",
  password: "",
  database: "App"
});

app.use(express.static(__dirname+ "/client"));
app.use(bodyParser.json());


app.get("/users", function(req, res){
    //res.json(selectUsers());
    var query = "SELECT * FROM users;";
    con.query(query, function(err, results){
      if(err) throw err;
      res.send(JSON.stringify(results));
    });
    
});

app.post("/new/user", function(req, res){
    //res.json(selectUsers());
    var name = req.body.name;
    var query = "INSERT INTO users (name) VALUES (?);";
    con.query(query, name, function(err, results){
      if(err) throw err;
      console.log("User Added");
    });
});

app.post("/destroy/user", function(req, res){
    //res.json(selectUsers());
    var id = req.body.id;
    var query = "DELETE FROM users WHERE id = ?;";
    con.query(query, id, function(err, results){
      if(err) throw err;
      console.log("User Destroyed");
    });
    
});

app.listen(port);

console.log("listening to port: "+port);


// app.get("/", function(req, res){
//   res.send(layoutTemplate());
// });


 
