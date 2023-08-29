function divCon(x){
    let strok = 0;
    let nestrok = 0;
    for(let i = 0;i < x.length; i++){
        if(typeof x[i] === "number"){
            nestrok += x[i];
        }else{
            strok += +x[i];
        }
    }
    return nestrok - strok;
}
