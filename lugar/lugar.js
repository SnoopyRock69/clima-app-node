const axios = require('axios');

const getLugarLatLng = async(Direccion) => {

    let encodedURL = encodeURI(Direccion); //encodeURI() es una función de javascript para convertir URL en válida.    
    //Petición http mediante promesas (axios)
    /*Primero expecificamos la url del servicio a utilizar, */

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }&key=AIzaSyBFujVHvxllNXPtI2PmN7ClX8HrQgxCEtQ`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${Direccion}`);
    }
    let location = resp.data.results[0]; //Obtengo toda la información en un arreglo.
    let coors = location.geometry.location; // accedo al objeto que tiene la localización.       
    // De toda la información solo requiero la data y el status.
    // console.log(JSON.stringify(resp.data, undefined, 2)); // para ver la data completa como en Postman.
    // console.log(resp.status);      
    return {
        Direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}