var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
 console.log("Server running on port 3000");
 
});

app.get("/url", (req, res, next) => {
    sleepFor(5000);
    res.json(["Tony","Lissa","Michael","Ginger","Food"]);
    res.setTimeout(3000);
   });

   function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
