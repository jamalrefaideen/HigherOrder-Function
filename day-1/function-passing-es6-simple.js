let x = 10;


/**
 *
 * Higher order Function
 * @param num
 * @param cb
 */
function myAnotherFunction(num, cb) {
    console.log(`This is my  logic ${num * 90}`);
    cb(num);
}

/**
 * Arrow function
 */
myAnotherFunction(x, m => {
    console.log(" I am function " + m * 100);
});