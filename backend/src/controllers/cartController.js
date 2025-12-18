import Food from "../models/foodModel.js";
import User from "../models/userModel.js"

const getCart = async(req, res) => {
    try {
        const user = await User.findById(req.userId).populate({
            path: 'cart.foodId',
            select: "name image cost"
        });

        if(!user){
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const addItemToCart = async(req, res) => {
    const { foodId, quantity = 1 } = req.body;

    try {
        const foodItem = await Food.findById(foodId);
        if(!foodItem){
            return res.status(404).json({ message: 'Food item not found' });
        }

        let user = await User.findById(req.userId);

        const itemIndex = user.cart.findIndex(item => item.foodId.toString() === foodId);

        if(itemIndex > -1){
            user.cart[itemIndex].quantity += Number(quantity);
        } else {
            user.cart.push({ foodId, quantity: Number(quantity) });
        }

        await user.save();

        user = await user.populate({
            path: 'cart.foodId',
            select: 'name image cost'
        });

        res.status(200).json({ message: 'Item added to cart', cart: user.cart });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateCartQuantity = async(req, res) => {
    const { foodId } = req.params;
    const { action } = req.body;

    if (!action || (action !== 'increase' && action !== 'decrease')) {
        return res.status(400).json({ message: 'Action must be "increase" or "decrease"' });
    }

    try {
        let user = await user.findById(req.userId);

        const itemIndex = user.cart.findIndex(item => item.foodId.toString() === foodId);

        if(itemIndex > -1){
            const cartItem = user.cart[itemIndex];

            if(action === 'increase'){
                cartItem.quantity += 1;
            }

            if(action === 'decrease'){
                cartItem.quantity -+ 1;
            }

            if(cartItem.quantity <= 0){
                user.cart.splice(itemIndex, 1);
            }
        }

        await user.save;

        user = await user.populate({
            path: 'cart.foodId',
            select: 'name image cost'
        });

        res.status(200).json({ message: 'Cart quantity updated', cart: user.cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const removeItemFromCart = async(req, res) => {
    const { foodId } = req.params;

    try {
        let user = await user.findById(req.userId);

        const initialLength = user.cart.length;
        user.cart = user.cart.filter(item => item.foodId.toString() === foodId);

        if (user.cart.length === initialLength) {
            return res.status(404).json({ message: 'Item not found in cart' });
        }

        await user.save();

        user = await user.populate({
            path: 'cart.foodId',
            select: 'name image cost'
        });

        res.status(200).json({ message: 'Item removed from cart', cart: user.cart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export default { getCart, addItemToCart, updateCartQuantity, removeItemFromCart };