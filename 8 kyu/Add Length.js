function addLength(str) {
    //Add Length
    let temp = str.split(" ");
    let result = [];

    for (let i = 0; i < temp.length; i++) {
        result.push(temp[i] + " " + temp[i].length);
    }
    return result;
}