const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const adminRouter = require('./routes/admin');
const clientRouter = require('./routes/client');


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use(clientRouter);


app.listen(port, () => {
    console.log(`API Server is running on port ${port}.`);
});