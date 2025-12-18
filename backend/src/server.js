import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
const PORT = 5000 || 5003;
const app = express();

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
	connectDB();
});
