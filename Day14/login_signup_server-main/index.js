import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Db/db.js";
import route from "./Routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", route);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
