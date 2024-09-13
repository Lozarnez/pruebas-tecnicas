const currentBTC = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const prevBTC = 'https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD&for=yesterday';

module.exports = { currentBTC, prevBTC };