const { get } = require('../helpers');
const { currentBTC, prevBTC  } = require('../constants');

async function getDataBitcoin() {
  const currentBtc = await get(currentBTC)
  const prevBtc = await get(prevBTC)

  const preValue = Object.values(prevBtc.bpi)[0];
  return { currentBTC: currentBtc.bpi.USD.rate_float, prevBTC: preValue}
}


async function getCompare(req, res) {
  result = await getDataBitcoin()

  priceDifference = result.currentBTC - result.prevBTC
  currentDayPrice = result.currentBTC
  previousDayPrice = result.prevBTC

  return res.json({
    priceDifference,
    currentDayPrice,
    previousDayPrice
    
  })
}


module.exports = { getCompare }