
let pipe = (...args) => {
    return args.reduce(function(num, func) {
        return func(num);   
    });
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne, addOne);


