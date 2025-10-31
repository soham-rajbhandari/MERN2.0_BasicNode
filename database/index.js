const mongoose = require('mongoose')
const connectionString = "mongodb+srv://soham:<password>@cluster0.k67nsvs.mongodb.net/?appName=Cluster0"
async function connectToDatabase(){
   await mongoose.connect(connectionString);
   console.log("Connected to DB sucessfully");
}

module.exports = connectToDatabase