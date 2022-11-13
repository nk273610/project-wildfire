exports.notFoundResponse = function (res, msg) {
	var data = {
		status: "error",
		message: msg,
	};
	return res.status(404).json(data);
};

exports.ErrorResponse = function (res, msg) {
	var data = {
		status: "Error",
		message: msg,
	};
	return res.status(500).json(data);
};

exports.ErrorResponseBadRequest = function (res, msg_arr) {
	var data = {
		status: "Error",
		message: msg_arr,
	};
	return res.status(400).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		status: "success",
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};
