const axios = require('axios');
const utils = require('../utils/utils')

const baseURL = utils.getBaseUrl()
const timeout = 10000;
const instance = axios.create({
  baseURL,
  timeout,
});

exports.getClosedWildFireDataForMonthAndYear = function (month, year) {
    return instance.get(`/wildfires/ended?month=${month}&year=${year}`);
};