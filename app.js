const express = require("express");
const app = express();  
require('dotenv').config();
const student = require("./model/student");
require("./connection/mongo")

const port = process.env.PORT


const studentRouter= require("./routes/student");
app.use(express.json());
app.use('/students',studentRouter);


app.listen(port,()=>console.log(`server is running on${port}`));

