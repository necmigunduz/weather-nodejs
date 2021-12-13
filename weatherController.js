// Import the model
Weather = require('./weatherModel')
// Handle index actions
exports.index = function(req, res) {
    Weather.get(function(err, citiesWeather){
        if(err) {
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "Weather info retrieved successfully!",
            data: citiesWeather
        })
    })
}