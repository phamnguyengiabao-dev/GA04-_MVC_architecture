const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Cấu hình EJS
app.set('view engine', 'ejs');
// Sử dụng thư mục public cho các tệp tĩnh
app.use(express.static('public'));

// Sample products data
const products = [
  { id: 1, name: 'Predator 30th Anniversary Limited Edition Pool Cue - Ebony', image: '/images/product1.jpg', price: 100 },
  { id: 2, name: 'Predator Throne Series Pool Cues', image: '/images/product2.jpg', price: 150 },
  { id: 3, name: 'Predator BK Rush Pink Break Cue', image: '/images/product3.jpg', price: 200 },
  { id: 4, name: 'Predator BK4 Break Cue - Sport Wrap', image: '/images/product4.jpg', price: 250 },
  { id: 5, name: 'Predator Air Rush Gold Jump Cue - Sport Wrap', image: '/images/product5.jpg', price: 300 },
  { id: 6, name: 'Predator Air II Jump Cue With Sport Wrap', image: '/images/product6.jpg', price: 350 },
  { id: 7, name: 'Predator SP2 REVO Adventura 1 Pool Cue', image: '/images/product7.jpg', price: 400 },
  { id: 8, name: 'Predator Ikon4 Series Pool Cues', image: '/images/product8.jpg', price: 450 }
];
// // Kết nối tới MongoDB
// mongoose.connect('mongodb://localhost:27017/GA04-_MVC_architecture', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });


// // Sử dụng body-parser
 app.use(bodyParser.urlencoded({ extended: false }));


// Trang chủ với thanh navbar
app.get('/', (req, res) => {
  res.render('index', { products });
});

// Trang danh sách sản phẩm
app.get('/productlist', (req, res) => {
  res.render('products/productList', { products }); // Chỉ rõ đường dẫn trong thư mục products
});

// Trang chi tiết sản phẩm
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id); // Lấy ID từ URL
  const product = products.find(p => p.id === productId); // Tìm sản phẩm theo ID

  if (product) {
    res.render('products/productDetail', { product });
  } else {
    res.status(404).send('Không tìm thấy sản phẩm!');
  }
});
// Định nghĩa các tuyến đường ở đây
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});



