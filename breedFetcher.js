const log = console.log;
const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedName = process.argv.slice(2);

const fetchBreedDescription = function() {
  request(`${url}${breedName}`, (error, response, body) => {
    if (error) {
      log(error);
    }
    const cat = JSON.parse(body);
    if (cat.length === 0) {
      log(`Sorry, ${breedName} not found.`);
    } else {
      // log(cat);
      // log(typeof cat);
      log('Description:', cat[0].description.trim());
    }
  });
};

fetchBreedDescription();

module.exports = fetchBreedDescription;