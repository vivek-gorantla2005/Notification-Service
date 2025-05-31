import mongoose from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI  as string | undefined || "mongodb://localhost:27017/notification_system";

  try {
    await mongoose.connect(mongoUri);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectMongoDB;
