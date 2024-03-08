import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
