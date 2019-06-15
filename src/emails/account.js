const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shubhampal1898@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: `Welcome ${name}`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shubhampal1898@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: `Bye ${name}`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
