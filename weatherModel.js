// Weather model
var mongoose = require('mongoose')
// Setup Schema
var weatherSchema = mongoose.Schema({
    cityName: string,
    weatherType: string,
    temperature: integer
})

// Export the model
var Weather = module.exports = mongoose.model('weather', weatherSchema)

module.exports.get = function (callback, limit) {
    Weather.find(callback).limit(limit)
}