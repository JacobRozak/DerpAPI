const Product = require('./model')

async function getProduct(req, res, id) {
    try {
        const productsById = await Product.findByID(id)

        if(productsById) {
            res.writeHead(200, { 'Contdataent-Type': 'application/json' })
            res.end(JSON.stringify(productsById))
        } else{
            
        }
    } catch (error) {
        console.log(error)
    }
}
async function getProducts(req, res) {
    try {
        const products = await Product.findAll()

        res.writeHead(200, { 'Contdataent-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getProducts,
    getProduct
} 

