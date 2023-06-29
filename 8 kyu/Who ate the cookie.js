function cookie(x) {
    let type = typeof x
    let who = type == "string" ? "Zach" : type == "number" ? "Monica" : "the dog";
    return `Who ate the last cookie? It was ${who}!`;
}