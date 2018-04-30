const argv = require('yargs').options({
    Direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}