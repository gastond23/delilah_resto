const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sequelize = require('./data/database');

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use(clientRouter);

sequelize.sync().then(result => {
    console.log(result);
    app.listen(port, () => {
        console.log(`API Server is running on port ${port}.`);
    });
})
.catch(err => {
    console.log(err);
});
