const axios = require('axios');

const getClima = async(lat, lng) => {
    //axios
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=661dd84783427ce268fef69f69a108df`)
    return resp.data.main.temp; //La información viene almacenada en una "data".
}

//Exportamos la función para poder utilizarla desde otros archivos.
module.exports = {
    getClima
}