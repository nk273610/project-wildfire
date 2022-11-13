const wc = require('which-country');

exports.whichCountry = function (lattitude_lonitude_arr) {
	return wc(lattitude_lonitude_arr);
};