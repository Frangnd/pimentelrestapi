const http = require('http');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');
const routes = require('./routes/routes'); 

const server = http.createServer((req, res) => {
  
   routes.dispatch(req, res) && getProduct
   routes.dispatch(req, res) && getProducts
   routes.dispatch(req, res) && createProduct
   routes.dispatch(req, res) && updateProduct
   routes.dispatch(req, res) && deleteProduct

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
