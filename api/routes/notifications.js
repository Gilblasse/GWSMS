const express = require("express");
const router = express.Router();
const Nexmo = require("nexmo");

const nexmo = new Nexmo(
  {
    apiKey: "ea368459",
    apiSecret: "6H69gfidWi8WVj1G",
  },
  { debug: true }
);


router.post("/investors", (req, res, next) => {
  const from = "12602638453";
  const investors = req.body.data.investors;
  const text = req.body.data.message;
  var interval = 10 * 1000; // 10 seconds;


  for (var i = 0; i <=investors.length-1; i++) {
    
    setTimeout( function (i) {
      
      nexmo.message.sendSms(from,investors[i].phoneNumber,text, {type: "unicode"}, (err, responseData) => {
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
      });

    }, interval * i, i);

  }

});





router.post("/", (req, res, next) => {
  const from = "12602638453";
  const number = req.body.phoneNumber;
  const text = req.body.message;

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

});


module.exports = router;
