let isLeapYear = (date) => {
    let customDate = new Date(date);
    customDate = customDate.toString();
    if (customDate === 'Invalid Date') {
        return `Invalid Date`;
    } else {
        let currentYear = new Date(date).getFullYear();

        if ((currentYear % 400 === 0) || (currentYear % 4 === 0) && (currentYear % 100 !== 0)) {
            return `${currentYear} is leap year`;
        } else {
            return `${currentYear} is not leap year`;
        } 
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131)); 
