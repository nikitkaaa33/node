const { myName, myHobbies } = require("./multiple-export");

const myFriedsName = "Alice";

module.exports.myName = myName;
module.exports.myFriedsName = myFriedsName;
//property name could be a diffenrent from the different name
module.exports.myGreatHobbies = myHobbies;
