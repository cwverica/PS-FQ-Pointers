// add whatever parameters you deem necessary

function makeFreqMap(str) {
    let freqMap = new Map();
    for (let char of str.split("")) {
        let numOfChar = freqMap.get(char) || 0;
        freqMap.set(char, numOfChar + 1);
    }
    return freqMap;
}

function constructNote(message, letters) {
    if (message.length > letters.length) return false;
    let messageMap = makeFreqMap(message);
    let letterMap = makeFreqMap(letters);
    for (let key of messageMap.keys()) {
        if (!letterMap.has(key)) return false;
        if (letterMap.get(key) < messageMap.get(key)) return false;
    }

    return true;
}
