 const product = require("../controllers/productController.js");

function Router (){
    const Routes = {
        GET: {},
        POST: {},
        PUT: {},
        DEL: {}
    };
    
    const get = (url, callback) => {
      Routes.GET[url] = callback;
    }
    
    
    const post = (url, callback) => {
      Routes.POST[url] = callback;
    }
    
    
    const put = (url, callback) => {
      Routes.PUT[url] = callback;
    }
    
    
    const del = (url, callback) => {
      Routes.DEL[url] = callback;
    }
    
    return {
      'Routes': Routes,
      'get': get,
      'post': post,
      'put': put,
      'delete': del,
      'searchRoute':  (url, method) => {
         let route; 
            switch( method ) {
                case 'GET':  route = Routes.GET[url];    break;
                case 'POST': route = Routes.POST[url];   break;
                case 'PUT': route = Routes.PUT[url];     break;
                case 'DELETE': route = Routes.DEL[url];  break;
            }          
          return route;
      }
    }
    
}


const router = Router();
const dispatch = router.dispatch(req,res)= {
   router.post('/api/product', (req,res) =>{product.createProduct})
   router.get('/api/product', (req,res) =>{product.getProducts} )
   router.get('/api/product/uid', (req,res) =>{product.getProduct} )
   router.put('/api/product/', (req,res) =>{const ID =req.url.split('/')[3]; visitante.updateProduct(req,res, ID)} )
   router.delete(`/api/product/${req.url.split('/')[3]}`, (req, res) => {const ID =req.url.split('/')[3]; product.deleteProduct(req, res, ID)})

}
module.exports = {
    router, }