import Food from "../models/foodModel.js";

const getAllFoods = async(req, res) => {
    try {
        const foods = await Food.find({});
        res.status(200).json({
            success: true,
            count: foods.length,
            data: foods
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching foods',
            error: error.message
        }); 
    }
};

const getFoodById = async(req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if(!food){
            return res.status(404).json({
                success: false,
                message: 'Food not found'
            });
        }
        res.status(200).json({
            success: true,
            data: food
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching food',
            error: error.message
        });
    }
};

const getFoodsByCategory = async(req, res) => {
    try {
        const { category } = req.params;
        const foods = await Food.find({category}).sort({name: 1});
        
        res.status(200).json({
            success: true,
            count: foods.length,
            category,
            data: foods
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching foods by category',
            error: error.message
        });
    }
};

const searchFoods = async(req, res) => {
    try {
        const { search } = req.query;
        const foods = await Food.find({
            $or: [
                { name: { $regex: search, $options: 'i' } },
                { ingredients: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } }
            ]
        }).sort({name: 1});

        res.status(200).json({
            success: true,
            count: foods.length,
            query: search,
            data: foods
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error searching foods',
            error: error.message
        });
    }
};

const getCategories = async(req, res) => {
    try {
        const categories = await Food.distinct('category');
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching categories',
            error: error.message
        });
    }
};

export default { getAllFoods, getFoodById, getFoodsByCategory, searchFoods, getCategories }