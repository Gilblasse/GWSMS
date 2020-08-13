const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const notifications = require("./api/routes/notifications");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','*')

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
})


app.use("/api/notifications", notifications);

module.exports = app;
