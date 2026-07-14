const express = require("express");
const router = express.Router();
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");

// Upload Folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-")
    );
  },
});

const upload = multer({ storage });

// Gmail Transport
const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Career Route
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, position, coverLetter } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Career Application - ${fullName}`,

      html: `
        <h2>New Career Application</h2>

        <p><strong>Name:</strong> ${fullName}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Position:</strong> ${position}</p>

        <p><strong>Cover Letter:</strong></p>

        <p>${coverLetter}</p>
      `,

      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              path: path.join(__dirname, "../uploads/", req.file.filename),
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to submit application.",
    });
  }
});

module.exports = router;