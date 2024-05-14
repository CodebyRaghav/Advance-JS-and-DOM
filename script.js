// function getMilk(money) {   
//     var bottles = money * 1.5;
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("You can buy " + bottles + " bottles of milk from this amount of money which is  " + money + " dollars");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }
//   getMilk(10);


// BMI Calculator
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
// function bmiCalculator(weight, height){
//   var bmi= weight/(height*height);
//   return bmi;
// }

// var weight = prompt("Enter your weight(in Kgs): " );
// var height = prompt("Enter your height(in meters): " );
// console.log("Your BMI is: " + bmiCalculator(50, 2));

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/


// Random Number Generator
//var n = Math.random(); // it gives us output a random number from 0 to 0.9999999999999999 and never reaches 0
//n = n * 6; // Trying to roll dice through it i.e. generating number from 1 to 6 but in decimals.
//n = Math.floor(n) + 1;
//console.log(n); // generating a whole number from math.floor() function.



//Love Calculator
// function love(){
// var Person1 = prompt("Enter your Name: ");
// var Person2 = prompt("Enter your Partner's Name: ");

// var lovePercentage = Math.random();
// lovePercentage = lovePercentage * 100
// lovePercentage = Math.floor(lovePercentage) + 1;
// console.log("Hello, " + Person1 + ", your Love Percentage with " + Person2 + " is: ");
// console.log(lovePercentage + "%");
// }
// love();

//Another way to creating love Calculator
// prompt("Enter your name: ");
// prompt("Enter their name: ");
// var loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1;
// alert("Your Love Score is: " + loveScore + "%");

//BMI calc using if-else
// function bmiCalculator(weight, height) {
//   var BMI = weight / Math.pow(height, 2);
//   if(BMI < 18.5){
//       cosole.log("Your BMI is " + BMI + ", so your are underweight.");
//   }
//   if(BMI >= 18.5 && BMI <= 24.9){
//       console.log( "Your BMI is " + BMI + ", so you have a normal weight.");
//   }
//   if(BMI > 24.9) {
//       console.log("Your BMI is " + BMI + ", so you are overweight.");
//   }
// }
// bmiCalculator(50, 2);



// Leap year or not
// function isLeap(year) {
//   if(year % 4 === 0){
//     if(year % 100 === 0){
//       if(year % 400 === 0){
//         return "Leap year."
//       }
//       else{
//         return "Not leap year."
//       }
//     }
//     else{
//      return "Leap year.";
//     }
//   }
//   else{
//    return "Not leap year.";
//   }
// }

//Review the guest list
// var Array = ["Angela", "Raghav", "Kartik"];
// var ok = prompt("Enter your name: ");
// Array.includes(ok);
// if(Array.includes(ok)){
//   alert("Hello, you are welcome")
// }
// else{
//   alert("Sorry you are not invited. ");
// }



//FibonacciGenerator
function fibonacciGenerator(n) {
  var output = [];
  if(n === 1){
    output = [0]; 
  }
  else if(n === 2){
    output = [0, 1];
  }
  else {
    output = [0, 1];
    for(var i = 2; i<n; i++){
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }


  return output;
}
fibonacciGenerator(5);
