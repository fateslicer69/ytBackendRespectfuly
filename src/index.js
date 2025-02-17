import dotenv from "dotenv";

// Load environment variables first
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";

// Now connect to the database
connectDB();
