
const get = require('../helpers/fetch');

const apiUrl = require('../constants/apiUrls');

const getBitcoin = async(req,res) => {
  const url = apiUrl.currentBTC;
  const urlPasado = apiUrl.prevBTC;

  const respuestaHoy = await get.get(url);


  const respuestaAnterior = await get.get(urlPasado);

  // const res = await respuestaHoy.json();
  // const res2 = await respuestaAnterior.json();
  
  let valorHoy=respuestaHoy.bpi.USD.rate_float;


  let valor = Object.values(respuestaAnterior.bpi);
  

  let diferencia = respuestaHoy.bpi.USD.rate_float - valor[0];

  console.log(diferencia)
  

  

  res.json({
    msg:true,valorHoy,valor,diferencia
  })
  
 




  
}


module.exports = {
      getBitcoin
}