// add whatever parameters you deem necessary
function makeFreqMap(str) {
    let freqMap = new Map();
    for (let char of str.split("")) {
        let numOfChar = freqMap.get(char) || 0;
        freqMap.set(char, numOfChar + 1);
    }
    return freqMap;
}

function sameFrequency(int1, int2) {
    let str1 = int1.toString();
    let str2 = int2.toString();
    if (str1.length !== str2.length) return false;

    let freqMap1 = makeFreqMap(str1);
    let freqMap2 = makeFreqMap(str2);

    for (let key of freqMap1.keys()) {
        if (!freqMap2.has(key)) return false;
        if (freqMap1.get(key) !== freqMap2.get(key)) return false;
    }
    return true;
}
