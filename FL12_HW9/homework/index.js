function convert(...args) {
    let result = [];

    for (let i of args) {
        if (typeof i === 'string') {
            result.push(Number(i));
        } 
        
        if (typeof i === 'number') {
            result.push(i + '');
        }
    }

    return result;
}
convert(1, 2, 3, 4, 5);


function executeforEach (array, fn) {
    for (let i of array) {
        fn(i);
    }
}

executeforEach([1,2,3], function(el) {
    console.log(el * 2)
});

function mapArray(array, fn) {
    let result = [];
    for (let i of array) {
        if (typeof i === 'string') {
            i = +i;
        }
        result.push(fn(i));
    }
    return result;
}

mapArray([2, '5', 8], function(el) {
    return el + 3;
});


function filterArray (array, fn) {
    let result = [];

    executeforEach(array, e => {
        if (fn(e)) {
            result.push(e);
        }
    });

    return result;
}
filterArray([2, 5, 8], function(el) {
     return el % 2 === 0;
    });

function flipOver(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}
flipOver('hey world');

function makeListFromRange(distance){
    let result = [];
    for (let i = distance[0]; i <= distance[1]; i++) {
        result.push(i);
    }
    return result;
}
makeListFromRange([2, 7]);

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(array, key) {
    let result = [];
    executeforEach(array, e => {
        result.push(e[key]);
    });

    return result;
}

getArrayOfKeys(actors, 'name');


function substitute(array) {
    let result = [];
    // for (let i of array) {
    //     mapArray()
    // }
    mapArray(array, function(e){
        if (e < 30) {
            e = '*';
        }
        return result.push(e);
    });
    return result;
}

substitute([58, 14, 48, 2, 31, 29]);


const date = new Date(2019, 0, 2);
function getPastDay(date, day) {
    return date.setDate(date.getDate() - day);
}
getPastDay(date, 1);

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}
formatDate(new Date('6/15/2018 09:15:00'));