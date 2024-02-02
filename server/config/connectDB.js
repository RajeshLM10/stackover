import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/admin', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log(`Connected to MongoDB successfully`.bgGreen.white);
  } catch (error) {
    console.error(`MongoDB Error: ${error}`.bgRed.white);
  }
};

export default connectDB;