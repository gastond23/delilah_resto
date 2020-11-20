const bcrypt = require('bcryptjs');

const User = require('../models/user');


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
            return bcrypt.hash(newPassword, 12);
        })
        .then(hashedPassword => {
            const user = new User({
                name: newName,
                email: newEmail,
                adress: newAdress,
                phone: newPhone,
                password: hashedPassword
            })
            return user.save();
        })
        .catch(err => {
            console.log(err);
        })
}