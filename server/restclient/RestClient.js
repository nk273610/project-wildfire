const axios = require('axios');
const url = require('url');

const baseURL = process.env.EONET_NASA_URL;
const timeout = 10000;
const instance = axios.create({
  baseURL,
  timeout,
});

exports.getClosedWildFireDataForMonthAndYear = function (startOfMonth, endOfMonth) {
    const params = new url.URLSearchParams({ category: "wildfires", status: "closed", 
    start: startOfMonth, end: endOfMonth});
    return instance.get(`/api/v3/events?${params.toString()}`);
};