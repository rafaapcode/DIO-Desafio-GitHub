function getArr(arr, number) {

    try {

        if (!arr && !number) throw new ReferenceError("Coloque os parâmetros!!");

        if (typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object.");

        if (typeof number !== "number") throw new TypeError("O número precisa ser do tipo number.");

        if (arr.length !== number) throw new RangeError("O tamanho do array precisa ser igual ao número passado.");

        return arr;

    }catch(e){

        if(e instanceof ReferenceError){
            console.log(e.message);
            console.log("Este erro é um ReferenceError");
        }else if(e instanceof TypeError){
            console.log(e.message);
            console.log("Este erro é um TypeError");
        } else if(e instanceof RangeError){
            console.log(e.message);
            console.log("Este erro é um RangeError");
        }else{
            console.log("Ocorreu um tipo de Erro inesperado " + e);
        }
    }

}

console.log(getArr([], 0));


