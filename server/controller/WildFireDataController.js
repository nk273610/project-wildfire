const RestClient = require("../restclient/RestClient");
const apiResponse = require("../helper/apiResponse");
const moment = require("moment")
const { query, validationResult } = require('express-validator');
const utils = require("../helper/utils")

function compareByCountry(a,b) {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  }

  
exports.getWildFireDataEndedForMonthAndYear = [
    query('month').toUpperCase().exists().withMessage("The month parameter cannot be empty")
    .isIn(moment.monthsShort().map(x => x.toUpperCase()), message = "The month query parameter is incorrect")
    .withMessage('The month parameter is invalid'),

    query('year').exists().withMessage("The year parameter cannot be empty")
    .isInt({ min:2000, max: moment().year()})
    .withMessage('The year parameter is invalid'),

    async function(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return apiResponse.ErrorResponseBadRequest(res, 
                errors.array().map(x => { return x.msg })[0])
        }
        const month = moment().month(req.query.month).year(req.query.year);
        const startOfMonth = moment(month).startOf('month').format('YYYY-MM-DD');
        const endOfMonth   = moment(month).endOf('month').format('YYYY-MM-DD');
        try {
            const response = await RestClient.getClosedWildFireDataForMonthAndYear(startOfMonth, endOfMonth);
            const ret_response = []
            if (response.data.events.length > 0) {
                response.data.events.forEach(x => ret_response.push({wildfireName: x.title, 
                    country: utils.whichCountry(x.geometry[0].coordinates)}))
                ret_response.sort(compareByCountry);
            }
            return apiResponse.successResponseWithData(res, "Wildfires Data", ret_response);
        } catch(exp) {
            return apiResponse.ErrorResponse(res, "Internal Server Error");
        }}
];