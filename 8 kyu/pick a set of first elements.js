function first(arr, n = 1) {
    // if(n === 0) return [];
    // let result = [];
    // for (let i = 0; i < arr.length; i++){
    //     if( i < n){
    //         result.push(arr[i]);
    //     }
    // }
    // return result;
    return arr.slice(0, n);
}