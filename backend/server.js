require("dotenv").config();
var data = require("./users.json");
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(cors({ origin: "*" }));
app.get("/", function (req, res) {
	res.send("No body in api");
});
app.post("/users", jsonParser, function (req, res) {
	var title = req.body.title;
	if (title === "a" || title === "b") res.send("User Found: " + req.body.title);
	res.send("User not found.");
});
app.post("/employees", jsonParser, function (req, res) {
	var title = req.body.title;
	if (title === "c") res.send("User Found: " + req.body.title);
	if (title === "d") res.send("User Found: " + req.body.title);
	else res.send("User not found.");
});
var server = app.listen(process.env.PORT, () => {
	console.log(
		"Server running at " + server.address().address + server.address().port
	);
});
