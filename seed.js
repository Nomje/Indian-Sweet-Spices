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
    { name: 'Jalebi', emoji: 'https://www.rajbhog.com/wp-content/uploads/2022/04/The-Journey-of-Jalebi-870x635.jpg', category: categories[0], price: 6.99 },
    { name: 'Plain Burfi', emoji: 'https://egiftsportal.com/adminapi/uploads/products/EGPSWUK23.webp', category: categories[0], price: 9.99 },
    { name: 'Rasgulla', emoji: 'https://cdn1.foodviva.com/static-content/food-images/desserts-sweets-recipes/rasgulla/rasgulla.jpg', category: categories[0], price: 9.99 },
    { name: 'Gulab Jamum', emoji: 'https://www.orderyourchoice.com/117350-large_default/-send-gulab-jamun-lmb-sweets-.jpg', category: categories[0], price: 9.99 },
    { name: 'Kala Kand', emoji: 'https://tahoora.com/images/thumbs/0001857.jpeg', category: categories[0], price: 9.99 },
    { name: 'Chum Chum', emoji: 'https://i.pinimg.com/474x/86/57/47/865747ad1ee3929e73243a94f0184887.jpg', category: categories[0], price: 9.99 },
    { name: 'Malai Jamun', emoji: 'https://i.ytimg.com/vi/9u2T6N7rHuo/maxresdefault.jpg', category: categories[0], price: 9.99 },
    { name: 'Malai Chum Chum', emoji: 'http://www.yummyfoodrecipes.in/resources/picture/org/Bengali-Chum-Chum-Recipe.jpg', category: categories[0], price: 9.99 },
    { name: 'Hushi Halwa', emoji: 'http://www.cuisine69.com/wp-content/uploads/2018/04/Habshi-Halwa.jpg', category: categories[0], price: 9.99 },
    { name: 'Moti Choor Ladoo', emoji: 'https://static.toiimg.com/thumb/55048059.cms?imgsize=196306&width=800&height=800', category: categories[0], price: 9.99 },
    { name: 'Besan Ladoo', emoji: 'https://www.rajbhog.com/wp-content/uploads/2020/05/BESAN-LADOO-1.jpg', category: categories[0], price: 9.99 },
    { name: 'Gajar Halwa', emoji: 'https://shwetainthekitchen.com/wp-content/uploads/2021/01/Gajar-Halwa.jpg', category: categories[0], price: 9.99 },
    { name: 'Milk Cake', emoji: 'https://www.yummytummyaarthi.com/wp-content/uploads/2020/10/1-10.jpg', category: categories[0], price: 9.99 },
    { name: 'Kaju katll', emoji: 'https://img.global.news.samsung.com/in/wp-content/uploads/2021/10/feature-kaju-katli.jpg', category: categories[0], price: 9.99 },
    { name: 'Masoor Pak', emoji: 'https://carameltintedlife.com/wp-content/uploads/2020/10/Mysore-Pak-Recipe-1-5.jpg', category: categories[0], price: 9.99 },
    { name: 'Patisa', emoji: 'https://i0.wp.com/www.indianrecipeinfo.com/wp-content/uploads/2010/12/Soan-Papdi.jpg', category: categories[0], price: 9.99 },
    { name: 'Pista Burfi', emoji: 'https://img.freepik.com/premium-photo/pistachio-mavaa-khoa-sweet-otherwise-called-as-pista-barfi-burfi-barfeea-peda-indian-sweet-green-color_466689-69161.jpg?w=2000', category: categories[0], price: 9.99 }, 
    { name: 'RajBhog', emoji: 'https://5.imimg.com/data5/ANDROID/Default/2020/9/BD/ZB/AG/68574975/img-20200902-184353-jpg-500x500.jpg', category: categories[0], price: 9.99 },
    { name: 'Malai Sandwich', emoji: 'https://static.toiimg.com/thumb/53190483.cms?width=1200&height=900', category: categories[0], price: 9.99 },
    { name: 'Balu Shahi', emoji: 'https://www.continentalcuisinechefs.com/wp-content/uploads/2020/10/a1-15.jpg', category: categories[0], price: 9.99 },
    { name: 'Almond Burfi', emoji: 'https://sangskitchen.b-cdn.net/wp-content/uploads/2020/11/Almond-flour-burfi-768x767.jpg', category: categories[0], price: 9.99 },
    { name: 'Sutar Pheni', emoji: 'https://cdn.shopify.com/s/files/1/0587/0823/0318/products/kaka-halwai-sweet-pune-amrakhand_1200x1200.jpg?v=1645006461', category: categories[0], price: 9.99 },
    { name: 'Rasmalai', emoji: 'https://www.spiceupthecurry.com/wp-content/uploads/2020/08/rasmalai-recipe-1.jpg', category: categories[0], price: 9.99 },
    // Chat    
    { name: 'Pani Puri', emoji: 'https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg', category: categories[1], price: 4.49 },
    { name: 'Dahi Puri', emoji: 'https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/dahi-puri/dahi-puri.jpg', category: categories[1], price: 4.49},
    { name: 'Bhel Puri', emoji: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/08/bhel-puri-recipe-1.jpg', category: categories[1], price: 4.49 },
    { name: 'Sev Puri', emoji: 'https://www.cookwithkushi.com/wp-content/uploads/2015/12/IMG_3958_-1.jpg', category: categories[1], price: 4.49 },
    { name: 'Dahi Wada', emoji: 'https://mytastycurry.com/wp-content/uploads/2017/11/Dahi-Bhalla_Original.jpg', category: categories[1], price: 2.99 },
    
    // Snacks
    { name: 'Papri Gathia', emoji: 'https://d2j6dbq0eux0bg.cloudfront.net/images/7256541/982182340.jpg', category: categories[2], price: 6.99 },  
    { name: 'Namak Para', emoji: 'https://i2.wp.com/www.bharatzkitchen.com/wp-content/uploads/2020/08/namak-Pare.jpg?fit=640%2C362&ssl=1', category: categories[2], price: 6.99 },
    { name: 'Sev', emoji: 'https://i0.wp.com/givemesomespice.com/wp-content/uploads/2010/06/1-5-IMG_3920.jpg?fit=1520%2C1490&ssl=1', category: categories[2], price: 6.99 },
    { name: 'Chanadal', emoji: 'https://www.secondrecipe.com/wp-content/uploads/2021/11/air-fried-chana-dal.jpg', category: categories[2], price: 5.99 },
    { name: 'Spicy Peanut', emoji: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/17/3/YW0913H_spicy-chipotle-peanuts_s4x3.jpg.rend.hgtvcom.616.462.suffix/1482008571317.jpeg', category: categories[2], price: 6.99 },
    { name: 'Dal Moth', emoji: 'https://static1.bigstockphoto.com/9/1/5/large1500/51932749.jpg', category: categories[2], price: 6.99 },
    { name: 'Mathi', emoji: 'https://cdn.shopify.com/s/files/1/0433/1952/5533/products/ChatMathi.jpg?v=1600688018', category: categories[2], price: 5.99 },
    { name: 'Methi Mathi', emoji: 'https://taste-e-buds.com/wp-content/uploads/2020/09/IMG-20200910-WA0044.jpg', category: categories[2], price: 5.99 },
    { name: 'Hot Mix', emoji: 'https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2015/06/18/Food/Images/Merlin_16047678.jpg', category: categories[2], price: 6.99 },
    { name: 'Spicy Cashew', emoji: 'https://www.rajbhog.com/wp-content/uploads/2020/05/SPICY-CASHEW.jpg', category: categories[2], price: 11.99 },

    //Hot Food
    { name: 'Plain Parantha', emoji: 'https://www.cookingcarnival.com/wp-content/uploads/2021/02/Whole-wheat-Paratha.jpg', category: categories[3], price: 3.95 },
    { name: 'Aloo Parantha', emoji: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Aloo_Paratha1.jpg', category: categories[3], price: 7.95 },
    { name: 'Muli Parantha', emoji: 'https://www.spiceupthecurry.com/wp-content/uploads/2014/01/Mooli-paratha-recipe-stuffed-radish-paratha-2.jpg', category: categories[3], price: 1.95 },
    { name: 'Gobhi Parantha', emoji: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvuqfM6oiTIfpoZs5_JX7U1tL4E6oIfw7Kw&usqp=CAU', category: categories[3], price: 3.95 },
    { name: 'Paneer Parantha', emoji: 'https://www.indianveggiedelight.com/wp-content/uploads/2019/05/broccoli-paneer-paratha-featured.jpg', category: categories[3], price: 3.95 },
    { name: 'Dal Parantha', emoji: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/06/dal_paratha-1.jpg', category: categories[3], price: 3.95 },
    { name: 'Chana Bhatura', emoji: 'https://holycowvegan.net/wp-content/uploads/2008/10/chole-bhatura-chana-bhatura-10.jpg', category: categories[3], price: 3.95 },
    { name: 'Chana Poori', emoji: 'https://pbs.twimg.com/media/ElFaW6oUwAAWRXw.jpg', category: categories[3], price: 3.95 },
    { name: 'Dal Chawal', emoji: 'https://www.cookwithmanali.com/wp-content/uploads/2019/03/Rice-and-Dal-Instant-Pot-500x500.jpg', category: categories[3], price: 3.95 },
    { name: 'Kadi Chawal', emoji: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kadhi_Chawal_from_India.jpg/1200px-Kadhi_Chawal_from_India.jpg', category: categories[3], price: 3.95 },
    { name: 'Chapati Plate', emoji: 'https://www.mrishtanna.com/wp-content/uploads/2022/01/besan-roti-recipe-1.jpg', category: categories[3], price: 3.95 },
    { name: 'Samosa', emoji: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/12/09/0/DV3501_samosa-curry-fried-chicken-salt-lake-city-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1639061347834.jpeg', category: categories[3], price: 3.95 },
    { name: 'Chana Samosa', emoji: 'https://www.whiskaffair.com/wp-content/uploads/2021/04/Samosa-Chaat-2-3.jpg', category: categories[3], price: 3.95 },
    { name: 'Tikki', emoji: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Aloo-Tikki-2-3.jpg', category: categories[3], price: 3.95 },
    { name: 'Chana Tikki', emoji: 'https://www.vegrecipesofindia.com/wp-content/uploads/2012/12/aloo-tikki-chole-recipe-5.jpg', category: categories[3], price: 3.95 },
    { name: 'Kachori', emoji: 'https://www.funfoodfrolic.com/wp-content/uploads/2022/03/Kachori-Blog.jpg', category: categories[3], price: 3.95 },
    { name: 'Kachori Chana', emoji: 'https://img-global.cpcdn.com/recipes/97a21ecbe794efb3/680x482cq70/kachori-chana-chaat-recipe-main-photo.jpg', category: categories[3], price: 3.95 },
    { name: 'Spinach Pakora', emoji: 'https://static.toiimg.com/thumb/52478523.cms?imgsize=559082&width=800&height=800', category: categories[3], price: 3.95 }, 
    { name: ' Dhokla', emoji: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2020-12/dhokla%C2%A9iStock.jpg', category: categories[3], price: 3.95 },
    { name: 'Khandwi', emoji: 'https://www.spiceupthecurry.com/wp-content/uploads/2013/07/Gujarati-Khandvi-Recipe.jpg', category: categories[3], price: 3.95 },
    
    // South Indian Specials
    { name: 'Plain Dosa', emoji: 'http://www.flavorsofmumbai.com/wp-content/uploads/2014/05/Plain-Dosa-Recipe-1-1280x720.jpg', category: categories[4], price: 5.99 },
    { name: 'Masala Dosa', emoji: 'https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800', category: categories[4], price: 6.99 },
    { name: 'Mysore Plain', emoji: 'https://ugadisunnyvale.com/wp-content/uploads/2021/02/mysore-plain-dosa.jpg', category: categories[4], price: 5.99 },
    { name: 'Mysore Masala', emoji: 'https://vismaifood.com/storage/app/uploads/public/45a/29b/a17/thumb__700_0_0_0_auto.jpg', category: categories[4], price: 6.99 },
    { name: 'Rawa Plain', emoji: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1-500x375.jpg', category: categories[4], price: 5.99 },
    { name: 'Rawa Masala', emoji: 'https://i.pinimg.com/originals/c6/73/f3/c673f393983772a2ddff48df647050ce.jpg', category: categories[4], price: 6.99 },
    { name: 'Pesret Dosa', emoji: 'http://3.bp.blogspot.com/-Vfb_GPJAGg0/VnBaZfc6r_I/AAAAAAAABDI/O92OsKryCcA/s1600/Pesarattu%2BDosa-m.jpg', category: categories[4], price: 6.99 },
    { name: 'Spring Dosa', emoji: 'https://www.pepperbowl.com/wp-content/uploads/2019/02/spring-dosa.jpg', category: categories[4], price: 6.99 },
    { name: 'Idli Smbmar', emoji: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg', category: categories[4], price: 4.99 },
    { name: 'Wada Sambhar', emoji: 'https://3.bp.blogspot.com/-Uydy1Tm1ndQ/WXnqEVNogiI/AAAAAAAATBo/jd_Yok0_xLMIgUqmg2TVwD9H-_-tuANMACEwYBhgL/s1600/sambarvada3.jpg', category: categories[4], price: 4.99 },

    // Uttapm
    { name: 'Plain', emoji: 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/03/uttapam-recipe-1-500x375.jpg', category: categories[5], price: 5.99 },
    { name: 'Onion', emoji: 'https://drishtidarshan.com/wp-content/uploads/2021/01/south-indian-food-uttapam_55610-1814.jpg', category: categories[5], price: 7.99 },
    { name: 'Tomato', emoji: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg', category: categories[5], price: 7.99 },
    { name: 'Combo', emoji: 'https://www.cookingcarnival.com/wp-content/uploads/2022/02/Uttapam-1.jpg', category: categories[5], price: 10.99 },
    //Drinks
    { name: 'Sweet Lassi', emoji: 'https://www.sailusfood.com/wp-content/uploads/2015/04/lassi-recipe.jpg', category: categories[6], price: 2.99 },
    { name: 'Salt Lassi', emoji: 'https://cdn3.foodviva.com/static-content/food-images/north-indian-recipes/salted-lassi/salted-lassi.jpg', category: categories[6], price: 2.99},
    { name: 'Mango Lassi', emoji: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe-500x500.jpg', category: categories[6], price: 2.99 },
    { name: 'Mango Shake', emoji: 'https://veggiedesserts.com/wp-content/uploads/2021/03/mango-shake-5sq-500x500.jpg', category: categories[6], price: 2.99 },
    { name: 'Chaas', emoji: 'https://www.whiskaffair.com/wp-content/uploads/2021/01/Masala-Chaas-2-3.jpg', category: categories[6], price: 2.99 },
    { name: 'Roohafza', emoji: 'https://www.spiceupthecurry.com/wp-content/uploads/2014/04/rooh-afza-milkshake-recipe-summer-drink-3.jpg', category: categories[6], price: 2.99},
    { name: 'Chai(Small)', emoji: 'https://www.yumsome.com/wp-content/uploads/2019/12/vegan-masala-chai-1-1360x2040.jpg', category: categories[6], price: 1.00},
    { name: 'Chai(Large)', emoji: 'https://d3gg7p8kl1yfy0.cloudfront.net/Recipe-Detail-ChaiTea_1-0019_2022.jpg', category: categories[6], price: 2.49 },
    { name: 'Coke Can', emoji: 'https://scene7.samsclub.com/is/image/samsclub/0004900005846_B?wid=400&hei=400', category: categories[6], price: 1.00},
    { name: 'Fanta Can', emoji: 'https://m.media-amazon.com/images/I/61EMsb5lGLL.jpg', category: categories[6], price: 1.00 },
    { name: 'Thumbs Up', emoji: 'https://m.media-amazon.com/images/I/41mbTZc-7UL.jpg', category: categories[6], price: 1.00 },
    { name: 'Limca', emoji: 'https://m.media-amazon.com/images/I/51+wuRNugWL.jpg', category: categories[6], price: 1.00 },
  ]);

  console.log(items)

  process.exit();

})();