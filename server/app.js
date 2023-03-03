const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("image"), (req, res) => {
  res.json({ name: "heloo" });
  console.log(req.file);
});

app.listen(5000);
