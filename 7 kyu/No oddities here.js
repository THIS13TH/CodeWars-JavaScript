function noOdds( values ){
    let result = values.filter(item => {return item % 2 === 0});
    return result;
}