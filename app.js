var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
 console.log("Server running on port 3000");
 await sleep(10000);
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lissa","Michael","Ginger","Food"]);
   });