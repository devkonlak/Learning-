 console.log("hi KONLAK ");

//  const os = require("os");
//  const path = require ('path');
//  console.log(os.type());
//  console.log(os.version());
//  console.log(os.homedir());
//  console.log('Host name', os.hostname());
 
//  console.log(os.freemem());
//  console.log (__dirname); 

//  console.log(path.dirname(__filename));
//  console.log(path.basename(__filename));
//  console.log(path.parse(__filename));
const maths = require('./math'); /**./math is file importing  or const {add,sub,mul,div} = require(./math)*/ 
console.log(maths.add(5,6)); /* using add function from  or add(a,b) if we using above comment method*/
console.log(maths.sub(5,6)); 
console.log(maths.mul(5,6)); 
console.log(maths.div(5,6)); 

