// Your code goes here
let a = prompt('Please, enter A');
let b = prompt('Please, enter B');
let c = prompt('Please, enter C');

if (a == null || a == '' || b == null || b == '' || c == null || c == '') {
    console.log('Invalid input data');
} else {
    a = +a;
    b = +b;
    c = +c;

    if (isNaN(a) || isNaN(b) || isNaN(c) || a == 0) {
        console.log('Invalid input data');
    } else {
        let d, x, x1, x2;
        d = (b * b) - (4 * a * c);
        console.log('d = ' + d);

        if (d < 0) {
            console.log(`no solution (Discriminant < 0)`);
        } else if (d > 0) {
            x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
            x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
            console.log(`x1 = ${x1}, x2 = ${x2}`);
        } else {
            x = (-b + Math.sqrt(d)) / (2 * a);
            console.log(`x = ${x}`);
        }
    }
}


