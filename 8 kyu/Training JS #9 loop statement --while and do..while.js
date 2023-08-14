function padIt(str,n){
    //coding here
    let result = str;
    let count = 0;
    while(count < n){
        if(count % 2 === 0){
            result = "*" + result;
            count++;
        }else{
            result = result + "*";
            count++;
        }
    }
    return result;
}