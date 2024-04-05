const express = require('express');
const cors = require('cors');

require('./config/mongoose')
require("dotenv").config()
const contactRoutes = require("./routes/contactRoutes")


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/', contactRoutes)

app.listen(PORT, (err) => {
  if(err) throw err
  console.log(`Server is running on port ${PORT}`);
});