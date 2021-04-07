const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


var items=[];
var workItems=[];

var day="";

app.get("/", function (request, response) {
  var today = new Date();

  var option ={
    weekday:"long",
    day:"numeric",  
    month:"long"
     
  };
  var day=today.toLocaleDateString("en-US",option);

response.render("list", { listTitle:day , newListitems:items});

 
});
app.post("/",function(request,response){

    let item =request.body.newItem;
    if(request.body.list==="work")
    {
      workItems.push(item);
      response.redirect("/work");
    }
    else {
    items.push(item);
  response.redirect("/");
    } 
})

app.get("/Work",function(request,response){
  response.render("list",{listTitle:"Work List", newListitems:workItems })
})
// app.post("/work",function(request,response){
  
//   let item =request.body.newItem;
//   workItems.push(item);
//   response.redirect("/work")
// })
app.listen(process.env.PORT || 3000 , function () {
  console.log("code is running in  port");
});
// npm install dotenv 