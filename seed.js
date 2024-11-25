const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/GA04-_MVC_architecture', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const products = [
  { name: 'Sản phẩm 1', description: 'Mô tả 1', price: 100000 },
  { name: 'Sản phẩm 2', description: 'Mô tả 2', price: 200000 },
  { name: 'Sản phẩm 3', description: 'Mô tả 3', price: 300000 }
];

Product.insertMany(products, (err) => {
  if (err) return console.log(err);
  console.log('Đã thêm dữ liệu mẫu');
  mongoose.connection.close();
});
