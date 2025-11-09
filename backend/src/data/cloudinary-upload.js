import cloudinary from '../lib/cloudinary.js';
import fs from 'fs';

const foodData = JSON.parse(fs.readFileSync('src/data/foods_final.json', 'utf-8'));

async function uploadImagesAndUpdateData() {
    const updatedFoodData = [];

    console.log('Starting image upload to Cloudinary...');

    for(const food of foodData) {
        try {
            console.log(`Uploading: ${food.image}`);
            const result = await cloudinary.uploader.upload(`src/data/images/${food.image}`, {
                folder: "food-website",
                public_id: `food_${food.id}`,
                overwrite: true
            });
            
            const updated_Food = {
                ...food,
                image: result.secure_url,
                cloudinaryId: result.public_id
            };

            updatedFoodData.push(updated_Food);
            console.log(`Uploaded: ${food.name}`);
        } catch (error) {
            console.log(`Failed to upload ${food.image}:`, error.message);
            updatedFoodData.push(food);
        }
    }

    fs.writeFileSync('src/data/foods_with_cloudinary_urls.json', JSON.stringify(updatedFoodData, null, 2));
}

uploadImagesAndUpdateData();