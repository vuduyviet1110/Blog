const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exhbs = require('express-handlebars');
const route = require('./routes');
const database = require('./config/db');
const methodOverride = require('method-override');
const SortMiddleware = require('./app/middleware/SortMiddleware');
// morgan để http logger
app.use(morgan('combined'));

// Connect to database
database.connect()


//Use custome middleware

app.use(SortMiddleware);


// override lại các phương thức mặc định của form html theo chuẩn Restfull Api
app.use(methodOverride('_method'))

// template engine

// lấy handlebars từ thư viện express-handlebars import ở trên
app.engine(
    'handlebars',
    exhbs({
        helpers : require("./helpers/handlebars")
    }),
);

// set handlebars có view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));

//
app.use(express.urlencoded());
app.use(express.json());

//route
route(app);

// config file tĩnh
app.use(express.static(path.join(__dirname ,'public')))

//lắng nghe port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// mogoose delete plugin
