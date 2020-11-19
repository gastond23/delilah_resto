const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sequelize = require('./data/database');

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');

const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            //console.log(user);
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use('/admin', adminRouter);
app.use(clientRouter);

Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Product);
User.hasOne(Order);
Order.belongsTo(User);
Order.belongsToMany(Product, {
    through: OrderItem
});
Product.belongsToMany(Order, {
    through: OrderItem
});

sequelize
    //.sync({ force: true })
    .sync()
    .then(result => {
        //console.log(result);
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({
                name: 'Gaston',
                email: 'gaston.dandre@gmail.com',
                adress: 'Huanquero 8',
                phone: 2995279180
            })
        }
        return user;
    })
    .then(user => {
        //console.log(user);
        return user.createOrder();
    })
    .then(order => {
        app.listen(port, () => {
            console.log(`API Server is running on port ${port}.`);
        });
    })
    .catch(err => {
        console.log(err);
    });