// numeric string used with + gives string type
let result;

// Implicit Conversion.convert number to string. typeof function returns variable type
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));

// Explicit Conversion
let resultTwo;

// convert string to number
resultTwo = Number("5");
console.log(resultTwo, "-", typeof(resultTwo));

// convert boolean to string
resultTwo = String(true);
console.log(resultTwo, "-", typeof(resultTwo));

// convert number to boolean
resultTwo = Boolean(0);
console.log(resultTwo, "-", typeof(resultTwo));
