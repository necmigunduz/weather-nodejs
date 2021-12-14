// API Routes
// Initialize express router
let router = require('express').Router()
// Setup default API routes
router.get('/', function(req, res){
    res.json({
        status: 'API is working!',
        message: 'Welcome to WeatherRestAPI'
    })
})

// Import Controller
let weatherController = require('./weatherController')

// Weather Routes
router.route('/citiesWeather')
    .get(weatherController.index)
    .post(weatherController.new)

router.route('/citiesWeather/:weather_id')
    .get(weatherController.view)
    .patch(weatherController.update)
    .put(weatherController.update)
    .delete(weatherController.delete);
// Export API routes
module.exports = router