function mySimpleFunction(item) {

    let p = item * 23;
    if (p % 2 == 0) {
        return "rejected";
    }

    return "accepted";
}

let values = [120, 34, 56, 72, 89];
/**
 * forEach calls mySimple function as many times as the number of entries
 */
values.forEach(mySimpleFunction);


let statusArray = values.map(mySimpleFunction);
console.log(statusArray);

