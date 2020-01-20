const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var a1 = Number(req.body.a1);
    var a2 = Number(req.body.a2);
    var ans = a1 + a2;
    res.send("Answer is " + ans);
});

app.listen(3000, function () {
    console.log("Server is running at server 3000");
}); 