const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const notifications = require("./api/routes/notifications");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/notifications", notifications);

module.exports = app;
