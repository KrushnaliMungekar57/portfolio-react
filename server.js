import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));

console.log("Email user:", process.env.EMAIL_USER);
console.log("Email pass:", process.env.EMAIL_PASS);

// Nodemailer transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // Loaded from .env
    pass: process.env.EMAIL_PASS    // Loaded from .env
  },
});

// Verify connection
contactEmail.verify((error) => {
  if (error) {
    console.log("Transporter error:", error);
  } else {
    console.log("Nodemailer ready");
  }
});

// Route to send email
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  const mail = {
    from: email,
    to: "rupalimungekar3678@gmail.com",  // ✅ YOUR email
    subject: "Portfolio Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Send mail error:", error);
      res.json({ code: 500, status: "Failed to send message" });
    } else {
      res.json({ code: 200, status: "Message sent successfully" });
    }
  });
});
