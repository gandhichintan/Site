var express = require("express"),
bodyParser =require("body-parser"),
http = require("http"),
path = require("path"),
cors = require("cors");

var app = module.exports = express();

app.set('pert',process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());

app.route("/").get(function(req,res){
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.route("home").get(function(req,res){
    res.sendFile(path.join(__dirname,"public","index.html"));
});

//start server
var server_port = process.env.PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});