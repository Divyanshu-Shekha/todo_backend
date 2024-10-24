import mongoose from "mongoose";


const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODBURI
    );
    console.log("Database is connected successfully...");
  } catch (error) {
    console.error("Error : ", error);
    throw error;
  }
};

export default dbConnect;
