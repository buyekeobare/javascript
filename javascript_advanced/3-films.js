#!usr/bin/node

// I want to save the request that I get into a file

const request = require('request');
const fs = require('fs');
const url = "https://swapi.dev/api/films"

request.get(url).pipe(fs.createWriteStream('response.JSON'));

