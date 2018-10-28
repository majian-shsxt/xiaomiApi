const {success, error} = require('./tools');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const config = require('./config');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());       // to support JSON-encoded bodies

app.get("/", (req, res) => {
    res.json(success('it works'));
});

const xiaomiLightRoute = require('./routes/xiaomiLightRoutes');
app.use(config.rootAPI + 'xiaomiLight', xiaomiLightRoute);

app.listen(config.port, () => console.log(`Started at port ` + config.port + `!`));