// add whatever parameters you deem necessary
function countPairs(arr, num) {
    //given an array of unique integers and a number, return the  
    //number of pairs that sum to the given number
    // time complexity of O(nlogn) or O(n)

    //start with writing the code, then optimize

    let pairCount = 0;

    //  ********O(n^2) complexity*********
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === num) pairCount++;
    //     }
    // }


    //  *********O(nlogn) complexity******
    arr.sort((a, b) => {
        return parseInt(a) - parseInt(b);
    })
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let curPair = arr[left] + arr[right];
        if (curPair === num) {
            pairCount++;
            right--;
            left++;
        } else if (curPair > num) {
            right--;
        } else {
            left++;
        }
    }

    return pairCount;
}

