const array = [21,55,22,44,52,11,22]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function bubbleSort(arr) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length - 1; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < arr.length-1-i; j++) {
            if ( arr[j] >= arr[j+1] ) {
                // eslint-disable-next-line no-param-reassign
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
            }
        }
    }
    return arr
}
