// index.js
// Import express 
let express = require('express')
//Import routes
let apiRoutes = require('./api-routes')
// Initialize app
let app = express()
// Setup server
let port = process.env.PORT || 8080
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'))
//Use API routes
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port)
});