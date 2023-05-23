const fs = require('fs');
const request = require('request');

let breed = process.argv.slice(2)[0];

const breedFetcher = (breed) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (err) {
      console.log('ERROR: ', err);
      return;
    };

    let data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log(`Breed not found`);
      return;
    }

    console.log(data[0].description);
  })
};

module.exports = { breedFetcher };
