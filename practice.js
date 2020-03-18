let imgURLs = [
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
  
  var dan = imgURLs.map((url)=>{
    return `INSERT INTO images (img_url) VALUES ('${url}')`
  })
console.log(dan)

async.each(dan, function(insertUrl){
  db.query(insertUrl)
}, function(err){
  console.log('poopoo')
})
callback(null)

// -- INSERT INTO images (id,dish_id,img_url,comment) VALUES
// -- ('','','','');
