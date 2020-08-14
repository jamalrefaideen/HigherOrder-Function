function transform2(obj, cb) {
    let transformObj = {};
    for (const key in obj) {
        let value = cb(key);
        transformObj[obj[key]] = value;
    }
    return transformObj;
}

let transformInfo = {
    one: '1',
    two: '2',
};

let transformValue = transform2(transformInfo, g => {
    return g;
});

console.log(transformValue);
