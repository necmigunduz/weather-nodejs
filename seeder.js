// Import the model
let Weather = require('./weatherModel')
// Import mongoose
let mongoose = require('mongoose')

// Connect to Mongodb
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true })
// Define seeds
let cities = [
    new Weather({
        cityName: 'Dusseldorf',
        weatherType: 'Snowy',
        temperature: 0
    }),
    new Weather({
        cityName: 'Milano',
        weatherType: 'Rainy',
        temperature: 12
    }),
    new Weather({
        cityName: 'Amsterdam',
        weatherType: 'Snowy',
        temperature: -3
    }),
    new Weather({
        cityName: 'Addisababa',
        weatherType: 'Sunny',
        temperature: 40
    })
]

let done = 0

for(let i=0;i<cities.length;i++){
    cities[i].save(function(err, result){
        done++
        if(done === cities.length)
            exit()
    })
}

function exit(){
    mongoose.disconnect()
}