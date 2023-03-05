const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
app.use();
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
