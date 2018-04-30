// Importar módulos.
const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;
// llamar función

let getInfo = async(Direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(Direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `\nLa temperatura en ${coors.Direccion} es de ${temp} grados centígrados`;
    } catch (e) {
        return `\nNo se pudo determinar el clima en ${ Direccion }`;
    }

}
getInfo(argv.Direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));