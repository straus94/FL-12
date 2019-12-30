let makeNumber = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])) {
            result += str[i];
        }
    }
    if (result === '') {
        return '';
    } else {
        return parseInt(result);
    }
}

let countNumbers = str => {
    let result = {}
    // console.log(makeNumber(str));
    let currentNumber = makeNumber(str);
    currentNumber += '';
    let arr = currentNumber.split('');
    // console.log(arr);
    arr.forEach(e => {
        Object.keys(result).includes(e) ? result[e] += 1 : result[e] = 1;
    });
    return result;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers ( 'jdjjka000466588kkkfs662555');