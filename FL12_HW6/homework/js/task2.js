let a = +prompt('Please, enter A');
let b = +prompt('Please, enter B');
let c = +prompt('Please, enter C');

if (a === 0 || b === 0 || c === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Triangle doesn’t exist');
} else if (a + b > c || b + c > a || a + c > b) {
    if (a + b === c + c) {
        console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle')
    } else {
        console.log('Scalene triangle')
    }    
} else {
    console.log('Triangle doesn’t exist');

}
