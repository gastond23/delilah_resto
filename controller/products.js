exports.createProduct = (req, res, next) => {
    console.log(req.body);
    console.log('producto creado');
};

exports.getAllProducts = (req, res, next) => {
    console.log('listado completo de productos');
};