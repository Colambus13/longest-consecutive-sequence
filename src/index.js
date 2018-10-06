module.exports = function longestConsecutiveLength(array) {
    var maxValue = 1;
    var counter = 1;

    if (array.length === 0) return 0;
    if (array.length === 1) return 1;

    function ownSort(a, b){
        if(a > b) return 1;
        if(a < b) return -1;
    }
    array.sort(ownSort);

    for (var i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) continue;
        if (array[i - 1] === array[i] - 1) {
            counter++;
        } else {
            counter = 1;
        }
        maxValue = Math.max(counter, maxValue);
    }
    return maxValue;
}