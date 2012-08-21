var http = require('http');
var pnrNumber = "8557669620";

//http://pnrapi.appspot.com/<10-digit-pnr-number>

var options = {
	host: 'pnrapi.appspot.com',
	path: "/"+pnrNumber,
	method: 'GET'
};

var processPRNResponse = function(response){

	console.log("STATUS: "+ response.statusCode);
	console.log("HEADERS: "+ JSON.stringify(response.headers));
	response.setEncoding("utf8");
	response.on("data", function(chunk){
		console.log("BODY:"+chunk);
	});

};

var httpReq = http.request(options, processPRNResponse);

httpReq.on("error", function(e){
	console.log("problem with request: "+ e.message);
});
	
httpReq.write("data\n");	
httpReq.write("data\n");	
httpReq.end();