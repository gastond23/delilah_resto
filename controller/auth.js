const {
    jwt,
    firma
} = require('../models/token');

const User = require('../models/user');

exports.userOk = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const tokenVerification = jwt.verify(token, firma);
        const userId = tokenVerification.userData.id
        if (tokenVerification) {
            User.findByPk(userId)
                .then((user) => {
                    req.user = user;
                    next()
                }).catch(err => {
                    console.log(err);
                });
        } else {
            res.status(400).send('Error al validar usuario.')
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Usuario no existente');
    }
}

exports.adminVerification = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const tokenVerification = jwt.verify(token, firma);
        if (tokenVerification.userData.admin == 1) {
            return next();
        } else {
            res.status(400).send('No posees permisos de administrador.')
        }
    } catch (err) {
        res.status(400).send('No se encontró usuario registrado.')
    }
}