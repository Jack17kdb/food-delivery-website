import foodController from "../controllers/foodController.js";
import express from 'express';

const router = express.Router();

router.get('/', foodController.getAllFoods);
router.get('/categories', foodController.getCategories);
router.get('/search', foodController.searchFoods);
router.get('/category/:category', foodController.getFoodsByCategory);
router.get('/:id', foodController.getFoodById);