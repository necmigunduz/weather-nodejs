// index.js
let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')


// Initialize app
let app = express()

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Import API routes
let apiRoutes = require('./api-routes')

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true })

var db = mongoose.connection

if(!db)
    console.log('Error connecting db')
else
    console.log('DB connected successfully!')

// Setup server
let port = process.env.PORT || 8080

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'))

//Use API routes
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port)
});