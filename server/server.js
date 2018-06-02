var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var os = require('os');
var fs = require('fs');
var host = os.platform() === 'win32' ? '127.0.0.1' : '0.0.0.0';
app.set('port', process.env.PORT || 8001);
var port = process.env.PORT || 8001;
var server = http.createServer(app);

// Use the below 2 lines while running server directly
/*console.log('Server listening to http://' + host + ':' + port);
app.listen(port, host); */
app.use(express.static(__dirname));



app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
});

app.get('/launches', function(req, res) {
	/* Note:- This API acts as a proxy and calls SpaceX API to get and return /launches JSON */
	/*makeRequest('https://api.spacexdata.com/v2/launches/latest')
		.then((html) => res.send(html))
		.catch((err) => console.error(err));*/
		
	fs.readFile(__dirname+'/launches.json', function(err, content){
        res.write(content);
        res.end();
    });
});

app.get('/launchpads', function(req, res) {
	/* Note:- This API acts as a proxy and calls SpaceX API to get and return /launchpads JSON */
	/*makeRequest('https://api.spacexdata.com/v2/launchpads')
		.then((html) => res.send(html))
		.catch((err) => console.error(err));*/
	fs.readFile(__dirname+'/launchpads.json', function(err, content){
        res.write(content);
        res.end();
    });
});

// export start module to start server via grunt file
module.exports = {
	start: function(port) {
		server.listen(port);
	}
}


// Note:- I have removed the proxy logic because it was timing out for some reason. Was working earlier 
/*const makeRequest = function(url) {
	// return new pending promise
	return new Promise((resolve, reject) => {
		// select http or https module, depending on reqested url
		const lib = url.startsWith('https') ? require('https') : require('http');
		const request = lib.get(url, (response) => {
			// handle http errors
			if (response.statusCode < 200 || response.statusCode > 299) {
				reject(new Error('Failed to load page, status code: ' + response.statusCode));
			}
			// temporary data holder
			const body = [];
			// on every content chunk, push it to the data array
			response.on('data', (chunk) => body.push(chunk));
			// we are done, resolve promise with those joined chunks
			response.on('end', () => resolve(body.join('')));
		});
		// handle connection errors of the request
		request.on('error', (err) => reject(err))
	})
};*/