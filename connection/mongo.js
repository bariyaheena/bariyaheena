// database connection
const mongoose = require("mongoose");
const url = process.env.URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connect with database..."))
  .catch((err) => console.log(err));

  module.exports = mongoose;