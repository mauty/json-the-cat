const log = console.log;
const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(`${url}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const cat = JSON.parse(body);
    if (cat.length === 0) {
      return callback(`Sorry, ${breedName} not found.`, null);
    }
    return callback(null, cat[0].description.trim());
  });
};


module.exports = { fetchBreedDescription };