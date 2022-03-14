module.exports = (aNumber) => {
    let result = '';
    if (aNumber % 3 === 0) {
        result += 'fizz'
    }
    if (aNumber % 5 === 0) {
        result += 'buzz';
    }
    return result || aNumber
}