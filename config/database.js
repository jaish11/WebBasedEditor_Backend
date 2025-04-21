// import mongoose from "mongoose";

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Database connection error:", error);
//     console.error("Database connection error:", error.message);
//     process.exit(1); // Exit process if the database connection fails
//   }
// };

// export default connectDatabase;
import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    // Use environment variable for MongoDB connection string
    const mongoUri = process.env.MONGO;

    if (!mongoUri) {
      throw new Error("MONGO URI is missing in environment variables");
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

export default connectDatabase;
