require('dotenv').config();
const express = require('express');
var indexRouter = require("./routes/index");
const apiResponse = require("./helper/apiResponse");

const app = express();

const port = process.env.APP_PORT || 5000;

const hostname = process.env.APP_HOSTNAME || 'localhost';

app.use('/api/',[indexRouter]);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Not Found");
});

module.exports = app.listen(port, () =>
	console.log(`App listening on http://${hostname}:${port}`)
);