const bcrypt = require('bcryptjs');

const User = require('../models/user');

const {
    jwt,
    firma
} = require('../models/token');


exports.crearUsuario = (req, res, next) => {
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newAdress = req.body.adress;
    const newPhone = req.body.phone;
    const newPassword = req.body.password;
    User.findOne({
            where: {
                email: newEmail
            }
        })
        .then(usuario => {
            if (usuario) {
                return res.status(400).send('Email existente!');
            }
            return bcrypt
                .hash(newPassword, 12)
                .then(hashedPassword => {
                    const user = new User({
                        name: newName,
                        email: newEmail,
                        adress: newAdress,
                        phone: newPhone,
                        password: hashedPassword
                    });
                    return user.save();
                })
        })
        .then(data => {
            res.status(200).send({
                msg: 'Usuario creado!',
                user: data
            });
        })
        .catch(err => {
            console.log(err);
        })
}

exports.loginUsuario = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const headers = req.headers;
    var usuarioLog;
    console.log(headers);
    User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            usuarioLog = user;
            if (!user) {
                return res.status(400).send('Email / usuario inexistente.');
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        var userData = usuarioLog.dataValues;
                        const token = jwt.sign({
                            userData
                        }, firma);
                        return res.status(200).json({
                            msg: 'Usuario logueado!',
                            usuario: usuarioLog.dataValues.email,
                            token: token
                        })
                    } else {
                        return res.status(400).send('Contraseña incorrecta.');
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        })
}

exports.verUsers = (req, res, next) => {
    User.findAll()
    .then(data => {
        return res.status(200).json({msg: 'GET Usuarios Ok!', usuarios: data});
    })
    .catch(err => {
        return res.status(400).send('Error 404, no existen usuarios.');
    })
}