// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(euro) {
   return euro * oneEuroIs.USD;

    
}

function fromDollarToYen(dollar) {
    return dollar * 0.83 * oneEuroIs.JPY;
 
     
 }

 function fromYenToPound(yen) {
    return yen * 0.0072 * oneEuroIs.GBP;
    
 }

 module.exports = { fromEuroToDollar,fromYenToPound, fromDollarToYen };
