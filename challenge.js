function fizzBuzz(phoneNumber) {
  var output = "";
  var sum = 0;
  phoneNumber = phoneNumber.toString();
 
  for (var i = 0; i < phoneNumber.length; i++) {
    sum += parseInt(phoneNumber.charAt(i));
  }

   
  for (var i = 1; i <= sum; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      output += "FizzBuzz ";
    } else if (i % 3 === 0) {
      output += "Fizz ";
    } else if (i % 4 === 0) {
      output += "Buzz ";
    } else {
      output += i + " ";
    }
  }

  return output;
}
var phoneNumber = 7038791006;
var result = fizzBuzz(phoneNumber);
console.log(result);
