const userWilder = require('./information');
var cowsay = require("cowsay");
console.log(cowsay.say({
    text: `Hello I'm ${userWilder.myName} from ${userWilder.campus} campus!`,
    e: "oO",
    T: "U "
}));