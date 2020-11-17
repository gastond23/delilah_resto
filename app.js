const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sequelize = require('./data/database');

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');

const Product = require('./models/product');
const User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use(clientRouter);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
//.sync({ force: true })
.sync()
.then(result => {
    //console.log(result);
    app.listen(port, () => {
        console.log(`API Server is running on port ${port}.`);
    });
})
.catch(err => {
    console.log(err);
});
