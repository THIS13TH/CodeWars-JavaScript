function twoHighest(arr) {
    let unique = [...new Set(arr)];
    let sorted = unique.sort((n1, n2) => (n1 - n2) * -1);
    if(sorted.length <= 2) return sorted;
    return sorted.slice(0, 2);
}