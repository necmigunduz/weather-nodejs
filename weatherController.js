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

// Handle view weather info
exports.view = function(req, res) {
    Weather.findById(req.params.weather_id, function(err, weather){
        if (err)
            res.send(err)
        res.json({
            message: 'Weather details are loading...',
            data: weather
        })
    })
}

// Handle update weather
exports.update = function(req, res) {
    Weather.findById(req.params.weather_id, function(err, weather){
        if (err)
            res.json(err)
        weather.cityName = req.body.cityName ? req.body.cityName : weather.cityName
        weather.weatherType = req.body.weatherType
        weather.temperature = req.body.temperature
        // Save the update weather
        weather.save(function(err){
            if (err)
                res.json(err)
            res.json({
                message: 'Weather is updated successfully!',
                data: weather
            })
        })
    })
}
// Handle delete
exports.delete = function(req, res) {
    Weather.remove({
        _id: req.params.weather_id
    }, function(err, weather){
        if (err)
            res.send(err)
        res.json({
            status: 'Success',
            message: 'Weather is deleted successfully!'
        })
    })
}