const { myName, myHobbies, myFavoriteNumber } = require("./multiple-export");
const greetingFn = require("./single-export");
const {
	myName: myOtherName,
	myFriedsName,
	myGreatHobbies,
} = require("./export-and-import");

greetingFn(myName);
console.log(myOtherName);
console.log(myFriedsName);

myHobbies.push("Climbing");
console.log(myGreatHobbies);
