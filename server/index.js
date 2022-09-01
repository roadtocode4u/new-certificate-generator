const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path'); 
const mongoose = require('mongoose')

const healthCheck = require("./models/health");
const User = require("./models/User");
const Proof = require("./models/Proof");
const Certificate = require("./models/Certificate");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB 📦');
});

app.get('/health', async (req, res) => {
  const health = await healthCheck.find();
  res.send({
    status: "success",
    message: "Health check found",
    data: health,
  });
});

app.get('/get/health', async (req, res) => {
  const health = await healthCheck.find();
  res.send({
    status: "success",
    message: "Health check found",
    data: health,
  });
});

app.post('/add/user', async (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
  });
  await user.save();
  res.send({
    status: "success",
    message: "User added successfully",
  });
});

app.get('/get/user', async (req, res) => {
  const user = await User.find();
  res.send({
    status: "success",
    message: "User found",
  });

});



app.post('/add/certificate', async (req, res) => {
  const certificate = new Certificate({
    studentName: req.body.studentName,
    studentId: req.body.studentId,
    studentEmail: req.body.studentEmail,
    courseName: req.body.courseName,
    startingDate: req.body.startingDate,
    endingDate: req.body.endingDate,
    certificateId: req.body.certificateId,
    certificateUrl: req.body.certificateUrl,
    proofWork: req.body.proofWork
  });

  await certificate.save();
  res.send({
    status: "success",
    message: "Certificate added successfully"
  });
});

app.get('get/certificate', async (req, res) => {
  const certificates = await Certificate.find();
  res.send({
    status: "success",
    message: "Certificates found",
    data: certificates,
  });
});

app.post('/add/proof', async (req, res) => {
  const proof = new Proof({
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    date: req.body.date,
    technology: req.body.technology,
    visibility: req.body.visibility,
    user: req.body.user,
  });
  await proof.save();
  res.send({
    status: "success",
    message: "Proof added successfully",
  });
});

app.get('/get/proof', async (req, res) => {
  const proof = await Proof.find();
  res.send({
    status: "success",
    message: "Proof found",
    data: proof,
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});