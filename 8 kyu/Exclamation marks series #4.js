//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove (string) {
    return string.replaceAll("!","") + "!";
}