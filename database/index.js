var faker = require('faker');

var randomRestaurant = faker.name.firstName(); // Rowan Nikolaus
var randomDish = faker.lorem.word(); // Kassandra.Haley@erich.biz
var randomFoodImg = faker.image.food();


console.log(randomRestaurant, randomDish, randomFoodImg)