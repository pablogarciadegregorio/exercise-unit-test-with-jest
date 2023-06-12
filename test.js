

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})



test("One dollar should be 106.157 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(371.54949999999997); //1 dollar son 106.157 yenes, entonces 3.5 dólares deberian ser = (3.5 * 106,157)
})

test("One Yen should be 0.00576 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(25000)).toBe(144); //1 yen son 0,00576 libras, entonces 25000 yenes deberian ser = (25000 * 0,00576)
})