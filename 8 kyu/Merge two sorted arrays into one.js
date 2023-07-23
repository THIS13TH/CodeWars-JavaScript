function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    arr.sort((a, b) => a - b);
    let resultArr = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
    return resultArr;

}
