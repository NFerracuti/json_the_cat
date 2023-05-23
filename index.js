const { fetchBreedDescription } = require('./breedFetcher');

let breed = process.argv.slice(2)[0];

fetchBreedDescription(breed, (err, description) => {
  if (err) {
    console.log(`Error fetch details: `, err);
  } else {
    console.log(description);
  }
});