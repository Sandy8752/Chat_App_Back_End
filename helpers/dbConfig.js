const mongoose = require("mongoose");


const dbConnect = async () => {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(()=>console.log('Connected to db'))
  .catch((err)=> console.log("DB connection error",err));

//   try {
//     await mongoose.connect(MONGODB_URL);
//     console.log("MongoDB connection successful");
//   } catch (error) {
//     console.log(error, "MongoDB connection error");
//   }
 };






module.exports = dbConnect;
