var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1> Vijay Sales  </h1>"
        +"<hr/>"
        +"<h3> Smart devices for sale </h3>"
        +"<br/>"
        +"<ol>"
        +"<li> Laptop </li>"
        +"<li> Mobile Phones </li>"
        +"<li> Hololens </li>"
        +"<li> Smart watches </li>"
        +"<li> Gaming console </li>"
        +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1> Vijay Sales  </h1>"
        +"<hr/>"
        +"<h3> Doing things extra ordinary </h3>"
        +"<br/>"
        +"<ol>"
        +"<li> chief mentor : kartik </li>"
        +"<li> director : katwal </li>"
        +"<li> subject master expert : kk </li>"
        +"</ol>"
    );
});


var server = app.listen(9000);
console.log("Vijay sales online shopping running on port 9000");