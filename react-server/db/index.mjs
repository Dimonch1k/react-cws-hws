import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.vgjnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

export default mongoose.connection;
