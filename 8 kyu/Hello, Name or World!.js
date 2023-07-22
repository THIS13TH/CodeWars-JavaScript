function hello(name) {
    if(name === "" || name === undefined) return "Hello, World!"
    return `Hello, ${name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase()}!`
}
