var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } 

app.listen(PORT, () => {
 console.log("Server running on port 3000");
 
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lissa","Michael","Ginger","Food"]);
    await sleep(5000);
   });

