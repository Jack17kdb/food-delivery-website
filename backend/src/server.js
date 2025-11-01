import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";

dotenv.config();
const PORT = 5000 || 5003;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
	connectDB();
});
