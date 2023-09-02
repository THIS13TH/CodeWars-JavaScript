function evenNumbers(array, number) {
    let tmp = [];
    for (let i = array.length -1; number > 0 ; i--) {
        if(array[i] % 2 === 0){
            tmp.push(array[i]);
            number--;
        }
    }
    return tmp.reverse();
}