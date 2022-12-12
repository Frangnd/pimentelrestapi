const http = require('http');
const url = require('url')

const router = require('./router2')
/* const {
  getProducts, 
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController'); */
//const routes = require('./routes/routes'); 

const server = http.createServer((req, res) => {
  
/*    routes.dispatch(req, res) && getProduct
   routes.dispatch(req, res) && getProducts */
/*    routes methods: {
    
   (req, res)=> createProduct
}); */
  let parsed_url  = url.parse(req.url, true).query;
   let path =  url.parse(req.url).pathname
   let  respuesta = router(path) 
 
   res.write(respuesta)  
   res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


