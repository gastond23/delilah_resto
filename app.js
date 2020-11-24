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
const OrderStatus = require('./models/order-status');
const PayStatus = require('./models/pay-status');


app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(adminRouter);
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
Order.hasMany(OrderStatus);
Order.hasMany(PayStatus);
Product.belongsToMany(Order, {
    through: OrderItem
});

sequelize
    .sync({ force: true })
    //.sync()
    .then(result => {
        app.listen(port, () => {
            console.log(`API Server is running on port ${port}.`);
        });
    })
    .catch(err => {
        console.log(err);
    });