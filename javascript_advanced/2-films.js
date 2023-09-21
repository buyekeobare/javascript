#!usr/bin/node

const request = require('request');

const url = "https://swapi.dev/api/films"

request.get (url, (error, response, body) => {
  console.log('Status Code: ', response.statusCode);
  // console.log(body);

  //To access the name
  // const object_body = JSON.parse(body);
  // console.log(object_body.name);

  //To get same results as file films.js
  const object_body = JSON.parse(body);
  // console.log(object_body);
  //console.log(object_body.results);
  object_body.results.forEach(function(film) {
    console.log(film.title);
  })

})
