let x = 10;

let a = function (k) {
    console.log(" I am function " + k * 100);
};

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


myAnotherFunction(x, a);