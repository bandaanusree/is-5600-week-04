const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')
app.use(middleware.cors)
app.use(bodyParser.json())
app.get('/products', api.listProducts)
app.get('/', api.handleRoot);
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.delete('/products/:id', api.deleteProduct)
app.put('/products/:id', api.updateProduct)
app.use(middleware.handleError)
app.use(middleware.notFound)