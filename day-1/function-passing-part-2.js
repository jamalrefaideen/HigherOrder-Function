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
 * Inline function definition and passing it
 */
myAnotherFunction(x, function (k) {
       console.log(" I am function " + k * 100);
    }
);