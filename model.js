const products = require('./products')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}
function findByID(id) {
    return new Promise((resolve, reject) => {
        const product = products.find(function (p) {
            return p.id == id
        })
        resolve(product)
    })
}

module.exports = {
    findAll,
    findByID
}
