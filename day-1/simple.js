function mySimpleFunction(item) {

    let p = item * 23;
    if (p % 2 == 0) {
        return "rejected";
    }

    return "accepted";
}

let values = [120, 34, 56, 72, 89];

for (let i = 0; i < values.length; i++) {
    let status = mySimpleFunction(values[i]);
    console.log(status);
}


