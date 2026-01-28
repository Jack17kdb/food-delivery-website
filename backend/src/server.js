import express from "express";
import helmet from 'helmet';
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import cookieParser from "cookie-parser";
import path from 'path';
import { logger, errorLogger } from './middleware/logger.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const app = express();

app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "img-src": ["'self'", "data:", "https://res.cloudinary.com"],
        "script-src": ["'self'", "'unsafe-inline'"],
        "connect-src": ["'self'"],
      },
    },
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(logger);
app.use(errorLogger);

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/cart", cartRoutes);

if(process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, "../frontend/dist")));

	app.get("*all", (req, res) => {
		res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
	})
}

app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
	connectDB();
});

