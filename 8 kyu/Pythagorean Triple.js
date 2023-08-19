function isPythagoreanTriple(integers) {
    integers.sort((a,b) => a - b);

    if(Math.pow(integers[0], 2) + Math.pow(integers[1], 2) === Math.pow(integers[2], 2)) return true;
    return false;
}