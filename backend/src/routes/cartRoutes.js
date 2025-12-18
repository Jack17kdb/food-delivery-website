import express from 'express'
import protect from '../middleware/protect.js';
import cartController from '../controllers/cartController.js';

const router = express.Router()
router.use(protect)

router.get('/', cartController.getCart);
router.post('/', cartController.addItemToCart);
router.patch('/:foodId', cartController.updateCartQuantity);
router.delete('/:foodId', cartController.removeItemFromCart);

export default router;