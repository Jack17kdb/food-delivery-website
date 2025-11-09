import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    image: String,
    ingredients: String,
    instructions: String,
    cost: Number,
    rating: Number,
    cloudinaryId: String
});

const Food = mongoose.model("Food", foodSchema);
export default Food;