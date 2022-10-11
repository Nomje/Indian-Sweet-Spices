require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Sweets', sortOrder: 10 },
    { name: 'Chat', sortOrder: 20 },
    { name: 'Snacks', sortOrder: 30 },
    { name: 'Hot Food', sortOrder: 40 },
    { name: 'South Indian Specials', sortOrder: 50 },
    { name: 'Uttapam', sortOrder: 60 },
    { name: 'Drinks', sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    //  Sweets
    { name: 'Jalebi', emoji: '🍔', category: categories[0], price: 6.99 },
    { name: 'Plain Burfi', emoji: '🥪', category: categories[0], price: 9.99 },
    { name: 'Rasgulla', emoji: '🌭', category: categories[0], price: 9.99 },
    { name: 'Gulab Jamum', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Kala Kand', emoji: '🍔', category: categories[0], price: 9.99 },
    { name: 'Chum Chum', emoji: '🥪', category: categories[0], price: 9.99 },
    { name: 'Malai Jamun', emoji: '🌭', category: categories[0], price: 9.99 },
    { name: 'Malai Chum Chum', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Hushi Halwa', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Moti Choor Ladoo', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Besan Ladoo', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Gajar Halwa', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Milk Cake', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Kaju katll', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Masoor Pak', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Patisa', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Pista Burfi', emoji: '🦀', category: categories[0], price: 9.99 }, 
    { name: 'RajBhog', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Malai Sandwich', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Balu Shahi', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Almond Burfi', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Sutar Pheni', emoji: '🦀', category: categories[0], price: 9.99 },
    { name: 'Rasmalai', emoji: '🦀', category: categories[0], price: 9.99 },
    // Chat    
    { name: 'Pani Puri', emoji: '🍤', category: categories[1], price: 4.49 },
    { name: 'Dahi Puri', emoji: '🦞', category: categories[1], price: 4.49},
    { name: 'Bhel Puri', emoji: '🍤', category: categories[1], price: 4.49 },
    { name: 'Sev Puri', emoji: '🦞', category: categories[1], price: 4.49 },
    { name: 'Dahi Wada', emoji: '🍤', category: categories[1], price: 2.99 },
    
    // Snacks
    { name: 'Papri Gathia', emoji: '🦀', category: categories[2], price: 6.99 },  
    { name: 'Namak Para', emoji: '🦀', category: categories[2], price: 6.99 },
    { name: 'Sev', emoji: '🦀', category: categories[2], price: 6.99 },
    { name: 'Chanadal', emoji: '🦀', category: categories[2], price: 5.99 },
    { name: 'Spicy Peanut', emoji: '🦀', category: categories[2], price: 6.99 },
    { name: 'Dal Moth', emoji: '🦀', category: categories[2], price: 6.99 },
    { name: 'Mathi', emoji: '🦀', category: categories[2], price: 5.99 },
    { name: 'Methi Mathi', emoji: '🦀', category: categories[2], price: 5.99 },
    { name: 'Hot Mix', emoji: '🦀', category: categories[2], price: 6.99 },
    { name: 'Spicy Cashew', emoji: '🦀', category: categories[2], price: 11.99 },

    //Hot Food
    { name: 'Plain Parantha', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Aloo Parantha', emoji: '🍝', category: categories[3], price: 7.95 },
    { name: 'Muli Parantha', emoji: '🍞', category: categories[3], price: 1.95 },
    { name: 'Gobhi Parantha', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Paneer Parantha', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Dal Parantha', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Chana Bhatura', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Chana Poori', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Dal Chawal', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Kadi Chawal', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Chapati Plate', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Samosa', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Chana Samosa', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Tikki', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Chana Tikki', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Kachori', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Kachori Chana', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Spinach Pakora', emoji: '🍕', category: categories[3], price: 3.95 }, 
    { name: ' Dhokla', emoji: '🍕', category: categories[3], price: 3.95 },
    { name: 'Khandwi', emoji: '🍕', category: categories[3], price: 3.95 },
    
    // South Indian Specials
    { name: 'Plain Dosa', emoji: '🍟', category: categories[4], price: 5.99 },
    { name: 'Masala Dosa', emoji: '🥗', category: categories[4], price: 6.99 },
    { name: 'Mysore Plain', emoji: '🥗', category: categories[4], price: 5.99 },
    { name: 'Mysore Masala', emoji: '🥗', category: categories[4], price: 6.99 },
    { name: 'Rawa Plain', emoji: '🥗', category: categories[4], price: 5.99 },
    { name: 'Rawa Masala', emoji: '🥗', category: categories[4], price: 6.99 },
    { name: 'Pesret Dosa', emoji: '🥗', category: categories[4], price: 6.99 },
    { name: 'Spring Dosa', emoji: '🥗', category: categories[4], price: 6.99 },
    { name: 'Idli Smbmar', emoji: '🥗', category: categories[4], price: 4.99 },
    { name: 'Wada Sambhar', emoji: '🥗', category: categories[4], price: 4.99 },

    // Uttapm
    { name: 'Plain', emoji: '🍨', category: categories[5], price: 5.99 },
    { name: 'Onion', emoji: '🧁', category: categories[5], price: 7.99 },
    { name: 'Tomato', emoji: '🍮', category: categories[5], price: 7.99 },
    { name: 'Combo', emoji: '🍰', category: categories[5], price: 10.99 },
    //Drinks
    { name: 'Sweet Lassi', emoji: '🥛', category: categories[6], price: 2.99 },
    { name: 'Salt Lassi', emoji: '☕', category: categories[6], price: 2.99},
    { name: 'Mango Lassi', emoji: '🍹', category: categories[6], price: 2.99 },
    { name: 'Mango Shake', emoji: '🍺', category: categories[6], price: 2.99 },
    { name: 'Chaas', emoji: '🍷', category: categories[6], price: 2.99 },
    { name: 'Roohafza', emoji: '🍷', category: categories[6], price: 2.99},
    { name: 'Tea(Small)', emoji: '🍷', category: categories[6], price: 1.00},
    { name: 'Tea(Large)', emoji: '🍷', category: categories[6], price: 2.49 },
    { name: 'Coke Can', emoji: '🍷', category: categories[6], price: 1.00},
    { name: 'Fanta Can', emoji: '🍷', category: categories[6], price: 1.00 },
    { name: 'Thumbs Up', emoji: '🍷', category: categories[6], price: 1.00 },
    { name: 'Limca', emoji: '🍷', category: categories[6], price: 1.00 },
  ]);

  console.log(items)

  process.exit();

})();