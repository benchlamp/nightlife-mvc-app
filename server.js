var express = require("express"),
    mongoose = require("mongoose"),
    dblogin = require("./dblogin"),
    morgan = require("morgan"),
    router = require("./router/mainRouter"),
    bodyParser = require("body-parser"),
    path = require("path"),
    app = express();
    
mongoose.connect(dblogin.dblogin);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function() {
    console.log("db connection established")
})

//logger
app.use(morgan('dev'));

// view engine setup
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');


app.set("models", path.join(__dirname + "models"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


router(app);

app.listen(process.env.PORT);