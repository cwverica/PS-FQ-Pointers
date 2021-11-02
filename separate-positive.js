// add whatever parameters you deem necessary

function separatePositive(arr) {
    // given array of non-zero integers, seperate positive
    // to the left and negative to the right

    // left pointer on first element
    // right pointer on last element
    let left = 0;
    let right = arr.length - 1;

    //loop while left < right
    while (true) {
        // if left is positive, move right until negative
        while (arr[left] > 0) {
            left++;
            if (left == arr.length) break;
        }
        // if right is negative, move left until positive
        while (arr[right] < 0) {
            right--;
            if (right < 0) break;
        }
        // swap
        if (left >= right) break;
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return arr;

}
