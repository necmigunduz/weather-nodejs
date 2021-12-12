//API Routes
//Initialize express router
let router = require('express').Router()
//Setup default API routes
router.get('/', function(req, res){
    res.json({
        status: 'API is working!',
        message: 'Welcome to WeatherRestAPI'
    })
})
//Export API routes
module.exports = router