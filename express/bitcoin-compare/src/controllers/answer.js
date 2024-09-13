const { get } = require('../helpers');
const { currentBTC, prevBTC } = require('../constants');

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const answer = async (req, res) => {
  try {
    const current = await get(currentBTC);
    const prev = await get(prevBTC);
    const currentDayPrice = current.bpi.USD.rate_float;
    const previousDayPrice = Object.values(prev.bpi)[0];
    const priceDifference = currentDayPrice - previousDayPrice;
    res.status(STATUS_SUCCESS).send({
      priceDifference,
      currentDayPrice,
      previousDayPrice
    })
  } catch (err) {
    res.status(STATUS_USER_ERROR).send({ error: err });
  }
}

module.exports = {
  answer,
}