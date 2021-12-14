// Weather model
let mongoose = require('mongoose')
// Setup Schema
let weatherSchema = mongoose.Schema({
    cityName: String,
    weatherType: String,
    temperature: Number
})

// Export the model
let Weather = module.exports = mongoose.model('weather', weatherSchema)

module.exports.get = function (callback, limit) {
    Weather.find(callback).limit(limit)
}