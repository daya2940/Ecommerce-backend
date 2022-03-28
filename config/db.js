import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useunifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDb Connected:${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error:${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
