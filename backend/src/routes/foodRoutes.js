import foodController from "../controllers/foodController.js";
import express from 'express';

const router = express.Router();

router.get('/category/:category', foodController.getFoodsByCategory);
router.get('/search', foodController.searchFoods);
router.get('/categories', foodController.getCategories);
router.get('/foods', foodController.getAllFoods);
router.get('/:foodId', foodController.getFoodById);

export default router;
