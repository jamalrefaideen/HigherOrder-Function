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
 * Function definition in a single line
 * @param m
 */
let g = m => console.log(" I am function " + m * 100);

/**
 * Arrow function with Single argument and with a Single  Statment
 */
myAnotherFunction(x, m => console.log(" I am function " + m * 100));
