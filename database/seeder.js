var async = require('async');

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
async.waterfall([
  function(callback) {
    var get2rest = 'SELECT id FROM restaurants limit 2'
    db.query(get2rest, function(error, results,fields){
      callback(null, results)
    })
  },
  function(results, callback) {
    const insertQueries = results.map((restObj)=>{
      var popDish = generateNDishNames(5);
      return popDish.map((dishName)=>{
        return `INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`
        } )
      })
      
      //flatten the insertQueries list to contain no non-nested array. 
      var insertQueryArray = [].concat.apply([], insertQueries)
      console.log(insertQueryArray)



      async.each(insertQueryArray, function(item){
        db.query(item)
      }, function(err) {
        console.log('poop')
      })

    }
], function (err, result) {
  if (err){
    console.log('error', err)
    db.end()

    return err;
  }
  db.end()
  console.log('all arguments touched')
  // result now equals 'done'
});

console.log('heehee')

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


