const fetch = require("node-fetch");
const dgram = require('dgram');
const fs = require('fs');
const request = require('request');
var ColorThief = require('color-thief');

const path = 'doggo.png';
var port = 3737;
var address = '192.168.1.177';

const api_url = 'https://dog.ceo/api/breeds/image/random';


async function getDog() {

  // Get JSON data from the API
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.message);
  const url = data.message;

  // Download image to file
  const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }
  download(url, path, () => {
    console.log('✅ Done!')

  // Get dominant color from the image in RGB format
  colorThief = new ColorThief(), 
  image = fs.readFileSync(path);  
  rgb = colorThief.getColor(image);  
  console.log(rgb)

  // Send RGB values via UDP
  var message = Buffer.from(rgb);
  console.log(message);
  var client = dgram.createSocket('udp4');
  client.send(message, 0, message.length, port, address, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + address +':'+ port);
    client.close();
  });
  })
  }

// Run function at startup
getDog();

// Run function every five seconds after startup
setInterval(getDog, 5000);
