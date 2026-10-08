const name = "sameer"
const repoCount = 50

/* this is old way to represent a value 
console.log (name  +   repoCount+   "value"); */

// This is a new way to represent a Value

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String(`sameer-ss-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

const newStringOne = "    sameer    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'))

console.log(gameName.split('-'));