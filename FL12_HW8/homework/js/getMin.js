let getMin = (...args) => {
    let min = args[0];
    for (let i of args) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}

getMin (3, 0, -3);