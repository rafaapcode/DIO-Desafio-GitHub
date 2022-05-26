let str = "teste";
let letraunca = '';
let mapLetras = new Map();

for(let i = 0; i < str.length; i++){
    let letras = str[i].toLocaleLowerCase();;

    if(mapLetras.has(letras)){
        mapLetras.set(letras, mapLetras[letras]);
    }else{
        mapLetras.set(letras, 1);
    }
}

for(let [key, value] of mapLetras){
    if(value === 1){
        console.log(key);
    }
}
