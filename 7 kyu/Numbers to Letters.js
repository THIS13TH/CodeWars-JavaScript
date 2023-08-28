function switcher(x){
    let result = "";
    let alphabet = "0zyxwvutsrqponmlkjihgfedcba!? ";

    for (let i = 0; i < x.length; i++){
        result += alphabet[x[i]];
    }
    return result;
}