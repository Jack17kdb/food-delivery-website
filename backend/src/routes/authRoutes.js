import express from 'express';
import authController from '../controllers/authController.js';
import protect from '../middleware/protect.js';

const router = express.Router();

router.post("/register", authController.Register);
router.post("/login", authController.Login);
router.post("/forgot-password", authController.ForgotPassword);
router.get("/me", protect, authController.AuthCheck);