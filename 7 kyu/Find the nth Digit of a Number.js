var findDigit = function(num, nth){
    num = num * -1;
    let result = 0;
    let digits = num.toString().split('').reverse();
    for(let i = 0; i < digits.length;i++){
        if(nth <= 0){result = -1;}
        else if(nth === i + 1){
            result = digits[i];
        }
    }

    return +result;
}