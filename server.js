const http = require('http')
const { getProducts ,getProduct } = require('./controler')

const server = http.createServer((req, res) => {
    if(req.url.match('api/products/[0-9]')){
        const id = req.url.split('/')[3];
        getProduct(req, res, id)
    } else if(req.url == "/api/products"){
        getProducts(req, res)
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>derp</h1>')
    }
    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, function(){console.log(`Server running on port ${5000}`)})
