const add = (a,b) => a+b;/**or exports.add */
const sub = (a,b) => a-b;/**or exports.sub */
const mul = (a,b) => a* b;/**or exports.mul */
const div = (a,b) => a+b;/**or exports.div */

module.exports = {add,sub,mul,div}; /**exportig module while using above model no need to use export in last */