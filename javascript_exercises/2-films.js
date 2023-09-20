#!usr/bin/node

const request = require('request');

const url = "https://swapi.dev/api/films"

request.get (url, (error, response, body) => {
  console.log('Status Code: ', response.statusCode);
  console.log(body);

})
