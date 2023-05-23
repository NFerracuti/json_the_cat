const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    
    if (err) {
      callback(err, null);
      return;
    }

    let data = JSON.parse(body);

    if (data[0] === undefined) {
      callback(null, `Breed not found`);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
