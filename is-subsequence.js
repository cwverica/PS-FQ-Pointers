// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (true) {
        if (pointer2 === str2.length) break;
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            if (pointer1 === str1.length) return true;
        }
        pointer2++;
    }
    return false;
}
