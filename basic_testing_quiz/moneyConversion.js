let oneEuroIs = {
    "JPY": 127.9,
    "USD":1.2,
    "GBP":0.8
}

function fromDollarToYen(dollarAmount){
    const japanVal = oneEuroIs['JPY'];
    return dollarAmount * japanVal;
}
function fromEuroToDollar(euroAmmount){
    const usVal = oneEuroIs['USD'];
    return euroAmmount * usVal;
}
function fromYenToPound(englandPound){
    const engPound = oneEuroIs['GBP'];
    return englandPound * engPound;
}