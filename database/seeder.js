var db = require("./index.js");
db.query('SELECT * FROM restaurants', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is fo0: ', results);
});





// var faker = require('faker');


// var randomRestaurant = faker.name.firstName(); // Rowan Nikolaus
// var randomDish = faker.lorem.word(); // Kassandra.Haley@erich.biz


// function generateNRestNames(n){
//   var results = [];
//   var bucket = {};
//     for (var i = 1; i <=n; i++){
  
//       results.push(faker.name.firstName())
      
//     }
//     return results;
//   }
//  var mallPlazaEats =  generateNRestNames(2)
// console.log(mallPlazaEats)

// function generateNDishNames(n){
// var results = [];
// var bucket = {};
//   for (var i = 1; i <=n; i++){

//     results.push(faker.lorem.word())

//   }
//   return results;
// }

// console.log(generateNDishNames(5))



// //steak
// https://s3-media0.fl.yelpcdn.com/bphoto/96PhSs6BPWO8K8LD98ECfA/o.jpg
// //lobster
// https://s3-media0.fl.yelpcdn.com/bphoto/DoGrowNVOmQs5w1AJrw0TA/o.jpg
// //shroomsteak
// https://s3-media0.fl.yelpcdn.com/bphoto/wX47uFBFTQT1HxSukw8oSQ/o.jpg
// //seabass
// https://s3-media0.fl.yelpcdn.com/bphoto/Cf1IRbr72eP_jG8kH2Pa0A/o.jpg
// //drink
// https://s3-media0.fl.yelpcdn.com/bphoto/bNpeMcDmkcQ3qZOlhEQUJg/o.jpg
// //uni
// https://s3-media0.fl.yelpcdn.com/bphoto/9NXiJ9LcD_AGfIJOXpId_Q/o.jpg
// //roasted veggies
// https://s3-media0.fl.yelpcdn.com/bphoto/7Fi3-xflXbvahRySvfPvZQ/o.jpg
// //flatbread
// https://s3-media0.fl.yelpcdn.com/bphoto/dpSPTSrk30gL9Hu7PILgDA/o.jpg
// //egg desert
// https://s3-media0.fl.yelpcdn.com/bphoto/4lUrrG_3OjmcPbtrtOtMUg/o.jpg
// //carrot dish
// https://s3-media0.fl.yelpcdn.com/bphoto/8TijMBQY9tXjAbVKm8qEyg/o.jpg

// console.log(randomRestaurant, randomDish)