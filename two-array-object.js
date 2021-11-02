// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrVals) {
    if (arrKeys.length === 0) return {};
    let newObj = {};
    for (let i = 0; i < arrKeys.length; i++) {
        if (i < arrVals.length) {
            newObj[arrKeys[i]] = arrVals[i]
        } else newObj[arrKeys[i]] = null;
    }
    return newObj;
}
