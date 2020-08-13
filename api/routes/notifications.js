const express = require("express");
const router = express.Router();
// const app = require('../../app')
// const bodyParser = require("body-parser");
const Nexmo = require("nexmo");
const socketio = require("socket.io");


const nexmo = new Nexmo(
  {
    apiKey: "ea368459",
    apiSecret: "6H69gfidWi8WVj1G",
  },
  { debug: true }
);





router.get("/signup", (req, res, next) => {
  res.status(200).json({
    message: `YOU HIT THE GET REQUEST SIGN UP ROUTE`,
  });
});




router.post("/signup", (req, res, next) => {
  const from = "12602638453";
  const number = req.body.phoneNumber;
  const text = req.body.message;

  // res.end(JSON.stringify(req.body));

  nexmo.message.sendSms(from,number,text, {type: "unicode"}, (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    }
  );

    res.status(200).json({
      message: `Sent SMS Message to ${number}`,
    });
});

// Sign up

// New List Num  &  Lvl

module.exports = router;
