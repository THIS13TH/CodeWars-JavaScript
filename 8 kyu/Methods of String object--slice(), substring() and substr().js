function cutIt(arr){
    let reuslt = [];
    let minLength = arr[0].length;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < minLength){
            minLength = arr[i].length;
        }
    }
    for(let i = 0; i < arr.length;i ++){
        reuslt.push(arr[i].substring(0, minLength));
    }
    return reuslt;
}