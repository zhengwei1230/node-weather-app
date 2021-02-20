const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0b70bdcc757836752d9903d5c17dc3b5&query=' + latitude + ',' + longitude

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'Temperature is ' + body.current.temperature + ', feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast