console.log("Ciao typeScript");
var x = "Ciao";
var y = "Ciao2";
var z = "Ciao3";
console.log(x);
var myString = "Daniele";
console.log(myString);
var sum = function (n1, n2) {
    var par1 = parseInt(n1);
    var par2 = parseInt(n2);
    if (typeof par1 === "number" && typeof par2 === "number") {
        return par1 + par2;
    }
    else {
        console.log("SCRIVI VALORI NUMERCI");
    }
};
// console.log(sum("2", 3));
//FAQCCIO LA STESSA COSA DI SOPRA SOLO CHE CON TYPESCRIPT POSSO DARE IL CONTROLLO SUBITO
var sumWithTypeScript = function (n1, n2) {
    return (n1 + n2).toString();
};
// console.log(sumWithTypeScript(3, 3));
//UNION TYPE |
var mixedAddiction = function (par1, par2) {
    if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
        return par1 + par2;
    }
    else {
        console.log("SCRIVI VALORI NUMERCI");
    }
};
console.log(mixedAddiction(3, "ciao"));
//CUSTOM TYP
// const mixedAddictionWithAlias = (par1: StringOfNumber, par2: StringOfNumber) => {
//   if (typeof par1 === "number" && typeof par2 === "number" && !isNaN(par1) && !isNaN(par2)) {
//     return par1 + par2;
//   } else {
//     console.log("SCRIVI VALORI NUMERCI");
//   }
// };
// console.log(mixedAddictionWithAlias(3, "ciao"));
// const mixedAddictionWithOpti0onal = (str1: string, str2: string) => {
//   return str1.concat(str2 || "");
// };
// console.log(mixedAddictionWithAlias("Epicode"));
