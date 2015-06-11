var callbackFunction = function(data) {
	var wind = data.query.results.channel.wind;
	var units = data.query.results.channel.units;
	console.log(data);
};