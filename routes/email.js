const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vika.avrora@gmail.com",
      pass: "Viktoria_2003",
    },
  });
  const mailOptions = {
    from: "vika.avrora@gmail.com",
    to: email,
    subject: "Newsletter subscription successful",
    text: "Thank you for subscribing to our newsletter!",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: ", info.response);
      res.status(200).send("Email sent");
    }
  });
});

module.exports = router;
