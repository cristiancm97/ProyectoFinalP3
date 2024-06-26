const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();
const port = process.env.PORT || 9000;

const MONGODB_URI = "mongodb+srv://programacion3:jose1488@cluster0.oh4oujp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));


app.listen(port, () => console.log("SERVIDOR FUNCIONANDO EN ", port));


