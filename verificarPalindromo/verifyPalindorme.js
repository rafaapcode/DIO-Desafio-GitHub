function palindrome(str) {
    if(!str) return "String inexistente";

    str = str.toLowerCase();

    str = str.split(" ");

    let strArr = str.join("");

    let array = [];
    for (let i in str) {
        let is = Number(i);
        let reverste = str[i].split("").reverse().join("");

        array.push(reverste)
    }

    array.reverse();
    let juntando = array.join("");

    

    return juntando === strArr;

}

console.log(
    palindrome("A Daniela ama a lei Nada"));
