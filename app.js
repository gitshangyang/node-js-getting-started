var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
 console.log("Server running on port 3000");
 
});

app.get("/url", (req, res, next) => {
    sleepFor(1000);
    console.log('server execution time:1000');
    res.setTimeout(3000);
    sleepFor(20000);
    console.log('server execution time: 20000');
    res.json(["Tony","Lissa","Michael","Ginger","Food"]);
   });

   function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){  } 
}
