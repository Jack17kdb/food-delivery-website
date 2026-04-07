import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

// ── Inline schemas (mirrors actual models) ──────────────────────────────────
const cartItemSchema = new mongoose.Schema({
    foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
    quantity: { type: Number, required: true, min: 1 },
}, { _id: false });

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true, required: true },
    email: { type: String, unique: true, trim: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    verificationTokenExpiresAt: { type: Date, default: null },
    resetToken: { type: String, default: null },
    resetTokenExpiresAt: { type: Date, default: null },
    cart: [cartItemSchema],
}, { timestamps: true });

const foodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    category: String,
    image: String,
    ingredients: String,
    instructions: String,
    cost: Number,
    rating: Number,
    cloudinaryId: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Food = mongoose.models.Food || mongoose.model('Food', foodSchema);

// ── Seed data ────────────────────────────────────────────────────────────────
const PASSWORD = 'Password1';
const SEED_EMAILS = ['jane.wambui@gmail.com', 'mike.ochieng@gmail.com'];

const seedUsers = [
    { username: 'jane_wambui', email: 'jane.wambui@gmail.com', isVerified: true },
    { username: 'mike_ochieng', email: 'mike.ochieng@gmail.com', isVerified: true },
];

const seedFoods = [
    // Burgers
    {
        id: 1, name: 'Classic Beef Burger', category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop',
        ingredients: 'Beef patty, lettuce, tomato, onion, cheddar cheese, sesame bun, ketchup, mustard',
        instructions: 'Grill patty for 4 mins each side. Toast bun. Layer with lettuce, tomato, onion, cheese and condiments.',
        cost: 850, rating: 4.5,
    },
    {
        id: 2, name: 'Crispy Chicken Burger', category: 'Burgers',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop',
        ingredients: 'Crispy chicken fillet, coleslaw, pickles, mayo, brioche bun',
        instructions: 'Deep fry seasoned chicken until golden. Assemble with coleslaw, pickles and mayo on a toasted brioche bun.',
        cost: 790, rating: 4.3,
    },
    // Pizza
    {
        id: 3, name: 'Margherita Pizza', category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop',
        ingredients: 'Pizza dough, tomato sauce, fresh mozzarella, basil leaves, olive oil, salt',
        instructions: 'Spread sauce on dough. Add mozzarella. Bake at 230°C for 10–12 mins. Finish with fresh basil.',
        cost: 1100, rating: 4.6,
    },
    {
        id: 4, name: 'BBQ Chicken Pizza', category: 'Pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop',
        ingredients: 'Pizza dough, BBQ sauce, grilled chicken, red onion, mozzarella, coriander',
        instructions: 'Spread BBQ sauce. Top with chicken, onion and cheese. Bake at 230°C for 12 mins. Garnish with coriander.',
        cost: 1250, rating: 4.7,
    },
    // Sides
    {
        id: 5, name: 'Crispy French Fries', category: 'Sides',
        image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&auto=format&fit=crop',
        ingredients: 'Potatoes, vegetable oil, salt, paprika',
        instructions: 'Cut potatoes, double-fry at 160°C then 190°C until golden. Season immediately.',
        cost: 350, rating: 4.4,
    },
    {
        id: 6, name: 'Coleslaw', category: 'Sides',
        image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&auto=format&fit=crop',
        ingredients: 'Cabbage, carrots, mayo, apple cider vinegar, sugar, salt, pepper',
        instructions: 'Shred cabbage and carrots. Mix dressing and toss together. Refrigerate 30 mins before serving.',
        cost: 250, rating: 4.0,
    },
    // Drinks
    {
        id: 7, name: 'Freshly Squeezed Orange Juice', category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&auto=format&fit=crop',
        ingredients: 'Fresh oranges, ice',
        instructions: 'Squeeze oranges and serve over ice.',
        cost: 300, rating: 4.8,
    },
    {
        id: 8, name: 'Mango Smoothie', category: 'Drinks',
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop',
        ingredients: 'Ripe mango, milk, honey, ice cubes',
        instructions: 'Blend mango, milk, honey and ice until smooth. Serve chilled.',
        cost: 380, rating: 4.6,
    },
    // Desserts
    {
        id: 9, name: 'Chocolate Lava Cake', category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop',
        ingredients: 'Dark chocolate, butter, eggs, sugar, flour, vanilla extract',
        instructions: 'Melt chocolate and butter. Whisk in eggs and sugar. Fold in flour. Bake at 200°C for 12 mins.',
        cost: 650, rating: 4.9,
    },
    {
        id: 10, name: 'Vanilla Ice Cream', category: 'Desserts',
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop',
        ingredients: 'Heavy cream, whole milk, sugar, vanilla bean, egg yolks',
        instructions: 'Prepare custard base, churn in ice cream maker, freeze for 4 hours.',
        cost: 400, rating: 4.5,
    },
];

async function seed() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB (food_db)');

    // ── Foods ────────────────────────────────────────────────────────────────
    await Food.deleteMany({});
    const createdFoods = await Food.insertMany(seedFoods);
    console.log(`Seeded ${createdFoods.length} food items`);

    // ── Users ────────────────────────────────────────────────────────────────
    await User.deleteMany({ email: { $in: SEED_EMAILS } });

    const hashedUsers = await Promise.all(
        seedUsers.map(async (u) => ({ ...u, password: await bcrypt.hash(PASSWORD, 10) }))
    );

    // Give jane a pre-filled cart with 2 burgers and a drink
    hashedUsers[0].cart = [
        { foodId: createdFoods[0]._id, quantity: 2 },  // Classic Beef Burger
        { foodId: createdFoods[6]._id, quantity: 1 },  // OJ
    ];

    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`Seeded ${createdUsers.length} users`);

    console.log('\n── Seed credentials ─────────────────────────────────');
    createdUsers.forEach((u) => {
        console.log(`  ${u.username}  |  ${u.email}  |  pw: ${PASSWORD}`);
    });
    console.log('──────────────────────────────────────────────────────\n');

    await mongoose.disconnect();
    console.log('Done.');
}

seed().catch((err) => { console.error(err); process.exit(1); });
