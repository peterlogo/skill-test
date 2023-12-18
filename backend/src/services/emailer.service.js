const nodemailer = require("nodemailer");
const i18n = require("i18n");
i18n.configure({
  locales: ["En", "Mn"],
  directory: __dirname + "/locales",
  defaultLocale: "En",
});

module.exports = {
  deliverEmail: function (dest, subject, body) {
    var transport = nodemailer.createTransport({
      //service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        //user: process.env.EMAIL_USER,
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PWD,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: dest,
      subject: subject,
      text: body,
    };

    console.log("Sending email to: " + dest);
    console.log("Subject: " + subject);
    console.log("Body: " + body);
    console.log("Email: " + process.env.EMAIL);

    transport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error sending email: " + error);
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
