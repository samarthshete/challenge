function fizzBuzz(phoneNumber) {
  var output = "";
  var sum = 0;
  phoneNumber = phoneNumber.toString();

  // Calculate the sum of the digits in the phone number
  for (var i = 0; i < phoneNumber.length; i++) {
    sum += parseInt(phoneNumber.charAt(i));
  }

  // Loop from 1 to the sum of the digits in the phone number
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
