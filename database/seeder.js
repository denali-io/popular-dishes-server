var async = require('async');
// var waterfall = require('async/waterfall');
var db = require("./index.js");
var faker = require('faker');

//see all the thingsin the table
db.query('SELECT * FROM restaurants', function (error, results, fields) {
  if (error) throw error;
  // console.log('restaurant names', results);
});



//hypothesis:
//create the array..
function generateNRestNames(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    results.push(faker.name.firstName())
  }
  return results;
}

var mallPlazaEats = generateNRestNames(2)
// console.log(mallPlazaEats)
//iterate forEach on the array to use one of the following:
mallPlazaEats.forEach((restName) => {
  db.query(`INSERT INTO restaurants (rest_name) VALUES ('${restName}')`, function (error, results, fields) {
    if (error) throw error;
    // console.log(results)
  })
})


//generate random dish names
function generateNDishNames(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    results.push(faker.lorem.word())
  }
  return results;
}

async.waterfall([
  function (callback) {
    var get2rest = 'SELECT id FROM restaurants limit 2'
    db.query(get2rest, function (error, foo, fields) {
      callback(null, foo)
    })
  },
  function (results, callback) {
    const insertQueries = results.map((restObj) => {
      var popDish = generateNDishNames(5);
      return popDish.map((dishName) => {
        return `INSERT INTO dishes (dish_name, restaurant_id) VALUES ('${dishName}', '${restObj.id}')`
      })
    })
    //flatten the insertQueries list to contain no non-nested array. 
    var insertQueryArray = [].concat.apply([], insertQueries)
    // console.log(insertQueryArray)
    async.each(insertQueryArray, function (item) {
      db.query(item)
    },
      function (err) {
        console.log('poop')
      })
    callback(null)
  },

  function(callback) {
    var getDishId = 'SELECT id FROM dishes'
    db.query(getDishId, function(error, results, fields){
      callback(null, results)
    })
  },

  //function for adding LARGEimage urls
  function(callback){
    

    let imgSmallURLs = [
      'https://s3-media0.fl.yelpcdn.com/bphoto/nc6MjSM2F-V5ztiuDxaZ9w/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/y8-lipW9bAEi2Qa_sfkeGA/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/46j54KAF0O9ycq9myHgLjA/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/xh3-DEsVrrXkD7xPL5cKOA/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/Y6e8LVreE45qx5blUUQjng/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/d9N8T7Hoim02ElId_ldU6w/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/CFrHYn4--lfXnESsffMGqw/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/a0fM3YxVNFnBiygNSCn3fw/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/aUfFZt15nASgZn0jRKC4rQ/258s.jpg',
      'https://s3-media0.fl.yelpcdn.com/bphoto/OJgp_pkgC1ooPQ48Bz5ftw/258s.jpg'
      ]
      var counter = 0;
      var imgQueries = imgSmallURLs.map((url)=>{
        
        return `INSERT INTO images (img_url, dish_id) VALUES ('${url}')`
      })
    // console.log(imgQueries)
    async.each(imgQueries, function(insertUrl){
      db.query(insertUrl)
    }, function(err){
      console.log('poopoo')
    })
    callback(null)
  }
],

  //if all the functions run....
  function (err, result) {
    if (err) {
      console.log('error', err)
      db.end()
    }
    db.end()
    console.log('all arguments touched')
    // result now equals 'done'
  });

//GENERAL HELPER DATA
// -- INSERT INTO images (id,dish_id,img_url,comment) VALUES
// -- ('','','','');






let imgLargeURLs = [
  'https://s3-media0.fl.yelpcdn.com/bphoto/96PhSs6BPWO8K8LD98ECfA/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/DoGrowNVOmQs5w1AJrw0TA/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/wX47uFBFTQT1HxSukw8oSQ/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/Cf1IRbr72eP_jG8kH2Pa0A/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/bNpeMcDmkcQ3qZOlhEQUJg/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/9NXiJ9LcD_AGfIJOXpId_Q/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/7Fi3-xflXbvahRySvfPvZQ/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/dpSPTSrk30gL9Hu7PILgDA/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/4lUrrG_3OjmcPbtrtOtMUg/o.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/8TijMBQY9tXjAbVKm8qEyg/o.jpg'
  ]