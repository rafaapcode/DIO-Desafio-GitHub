function comparisonNumbers(a, b) {

    const equals = a === b ? `Os números ${a} e ${b} são iguais.` : `Os números ${a} e ${b} não são iguais.`
    const sum = a + b;

    if (sum > 10 && sum < 20) {
        return equals + `Sua soma é ${sum}, que é maior que 10 e menor que 20`;
    } else if (sum === 10 && sum < 20) {
        return equals + `Sua soma é ${sum}, que é igual a 10 e menor que 20`;
    } else if (sum < 10) {
        return equals + `Sua soma é ${sum}, que é menor que 10 e menor que 20`;
    } else if (sum > 10 && sum > 20) {
        return equals + `Sua soma é ${sum}, que é maior que 10 e maior que 20`;
    } else if (sum > 10 && sum === 20) {
        return equals + `Sua soma é ${sum}, que é maior que 10 e igual a 20`
    }

}

console.log(
    comparisonNumbers(1, 2));