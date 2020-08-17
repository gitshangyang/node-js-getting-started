var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
 console.log("Server running on port 3000");
 
});

app.get("/url", (req, res, next) => {
    setTimeout(function1, 50000);
    res.json(["Tony","Lissa","Michael","Ginger","Food"]);
   });

   function function1() {
    // stuff you want to happen right away
    console.log('Welcome to My Console,');
}
