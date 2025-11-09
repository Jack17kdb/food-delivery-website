import { connectDB } from '../lib/db.js';
import fs from 'fs';
import Food from '../models/foodModel.js';

connectDB();

const foodData = JSON.parse(fs.readFileSync('src/data/foods_with_cloudinary_urls.json', 'utf-8'));

async function insertToMongoDB() {
    try {
        await Food.deleteMany({});
        await Food.insertMany(foodData);
        console.log(`Inserted ${foodData.length} foods into MongoDB`);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

insertToMongoDB();