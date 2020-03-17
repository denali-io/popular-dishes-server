var async = require('async');

async.waterfall([
  function(callback) {
      callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    console.log(arg1, arg2)
      
      callback(null, 'three');
  },
  function(arg1, callback) {
      // arg1 now equals 'three'
      console.log(arg1)
      callback(null, 'done');
  }
], function (err, result) {
  if (err){
    console.log(err)
    return err;
  }
  console.log('all arguments touched')
  // result now equals 'done'
});