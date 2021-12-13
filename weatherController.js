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

// Handle create weather conditions
exports.new = function(req, res) {
    var weather = Weather.new()
    weather.cityName = req.body.cityName ? req.body.cityName : weather.cityName
    weather.weatherType = req.body.weatherType
    weather.temperature = req.body.temperature
    // Save the weather
        weather.save(function(err){
            if (err)
                res.json(err)
            res.json({
                message: 'New weather is created!',
                data: weather
            })
        })
}

// Handle weather info
