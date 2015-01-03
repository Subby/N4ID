var request = require('request'),
	fs = require('fs'),
	parseArgs = require('minimist');

var THREADLOCATION = 'http://a.4cdn.org/' + board + '/thread/' + threadId + '.json';
var IMAGELOCATION = 'http://i.4cdn.org/' + board + '/';
var IMAGEDIRECTORY = 'images';
var IMAGESAVEPATH = IMAGEDIRECTORY + '/' + board + '/' + threadId + '/';

var argv = parseArgs(process.argv.slice(2), opts={});
var board = argv._[0];
var threadId = argv._[1];

function setUpDirectories() {
	fs.exists(IMAGEDIRECTORY, function(exists) {
		if(!exists) {
			fs.mkdir(IMAGEDIRECTORY, function() {
				console.log('Made the "' + IMAGEDIRECTORY +  '" directory.')
			});	
		}
	});
	
	fs.exists(IMAGEDIRECTORY + '/' + board, function(exists) {
		if(!exists) {
			fs.mkdir(IMAGEDIRECTORY + '/' + board, function() {
				console.log('Made the "' + board +  '" directory.')
			});	
		}
	});
	
	fs.exists(IMAGEDIRECTORY + '/' + board + '/' + threadId, function(exists) {
		if(!exists) {
			fs.mkdir(IMAGEDIRECTORY + '/' + board + '/' + threadId, function() {
				console.log('Made the "' + threadId +  '" directory.')
			});	
		}
	});	
}

function performDownload() {
	request(THREADLOCATION, function(err, res, body) {
		if(!err && res.statusCode == 200) {
			var data = JSON.parse(body);
			var postData = data.posts;
	
			for(var i = 0; i < postData.length; i++) {
				if(postData[i].tim !== undefined) {
					var imageName = postData[i].tim;
					var imageExtention = postData[i].ext;
					var imageUrl = IMAGELOCATION + imageName + imageExtention;
					if (fs.existsSync(IMAGESAVEPATH + imageName + imageExtention)) {
    					console.log('Image: ' + imageName + imageExtention + " already exists, not saving this image.");
					} else {
						request(imageUrl).pipe(fs.createWriteStream(IMAGESAVEPATH + imageName + imageExtention));
						console.log("Saving image: " + imageName + imageExtention);						
					}

				}
			}
		}
	});	
}

setUpDirectories();
performDownload();