// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    if (arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let curAvg = (arr[left] + arr[right]) / 2;
        if (curAvg === avg) {
            return true;
        } else if (curAvg < avg) {
            left++;
        } else {
            right--;
        }
    }
    return false;

}
