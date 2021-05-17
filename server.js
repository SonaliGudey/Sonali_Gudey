const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
const port = 3000;

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var heigh = parseFloat(req.body.Height);
  var weigh = parseFloat(req.body.Weight);
  var bmi = weigh/(heigh*heigh);
  
  res.send("Your BMI is "+ bmi);
});

app.listen(3000, function(){
  console.log("Server has started on port 3000");
});