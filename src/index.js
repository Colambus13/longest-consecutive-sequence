module.exports = function longestConsecutiveLength(array) {
    let maxValue = 1;
    let counter = 1;

    if (array.length === 0) return 0;
    if (array.length === 1) return 1;

    array.sort((a, b) => a - b);

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) continue;
        if (array[i - 1] === array[i] - 1){
            counter++;
        }else {
            counter = 1;
        }
        maxValue = Math.max(counter, maxValue);
    }
    return maxValue;
}