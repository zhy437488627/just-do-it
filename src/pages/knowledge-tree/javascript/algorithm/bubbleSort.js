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
function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
const removeDuplicates = function(nums) {
    let i=0; let j=2
    while(j<nums.length-1) {
        if(nums[i] === nums[j]){
            for(x = j;x<nums.length-1; x++) {
    
            }
        } else {
            i++
            j++
        }
    }
    };