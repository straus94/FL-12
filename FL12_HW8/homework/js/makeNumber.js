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

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');