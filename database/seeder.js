var db = require("./index.js");
var faker = require('faker');

//see all the thingsin the table
db.query('SELECT * FROM restaurants', function (error, results, fields) {
  if (error) throw error;
  // console.log('restaurant names', results);
});



//hypothesis:
//create the array..
function generateNRestNames(n){
  var results = [];
    for (var i = 1; i <=n; i++){
      results.push(faker.name.firstName())
    }
    return results;
  }

var mallPlazaEats =  generateNRestNames(2)
// console.log(mallPlazaEats)
//iterate forEach on the array to use one of the following:
mallPlazaEats.forEach((restName)=>{
  db.query(`INSERT INTO restaurants (rest_name) VALUES ('${restName}')`, function(error, results,fields){
    if (error) throw error;
    // console.log(results)
  })
})


//generate random dish names
function generateNDishNames(n){
var results = [];
  for (var i = 1; i <=n; i++){
    results.push(faker.lorem.word())
  }
  return results;
}

// console.log(generateNDishNames(5))


// add dishes to top two rests

console.log('11111111')
const populateDishes = async () => {
  const dishes = await db.query('SELECT id FROM restaurants limit 2', function(error, results,fields){
    if (error) throw error;
    console.log('222222')
     results.forEach((restObj)=>{
      var popDish = generateNDishNames(5);
      console.log('333333333')
      popDish.forEach((dishName)=>{
        console.log('444444444')
        // console.log(`INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`)
        db.query(`INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`, function(error, results,fields){
          if (error) throw error;
          // console.log(results)
        })
      } )
    })
  })

  return dishes;
}
populateDishes();
// console.log('11111111')
// db.query('SELECT id FROM restaurants limit 2', function(error, results,fields){
//   if (error) throw error;
//   console.log('222222')
//   await results.forEach((restObj)=>{
//     var popDish = generateNDishNames(5);
//     console.log('333333333')
//     popDish.forEach((dishName)=>{
//       console.log('444444444')
//       // console.log(`INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`)
//       db.query(`INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`, function(error, results,fields){
//         if (error) throw error;
//         // console.log(results)
//       })
//     } )
//   })
// })







//GENERAL HELPER DATA

// -- INSERT INTO restaurants (id,rest_name) VALUES
// -- ('','');
// -- INSERT INTO dishes (id,dish_name,restaurant_id) VALUES
// -- ('','','');
// -- INSERT INTO images (id,dish_id,img_url,comment) VALUES
// -- ('','','','');







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

console.log('EOF')


db.end()
