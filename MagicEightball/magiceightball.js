// function myFunction() {
//   var person = prompt ("Please enter your name");
//   if (person != null) {
//     document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
//   }
// }


let userName = 'Bayo';
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');
let userQuestion = 'Will I become a ware wolf tonight?';
console.log(`So you want to know ${userQuestion}, ${userName}?`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain.';
    break;
  case 1: 
    eightBall = 'It is decidedly so.';
    break;
  case 2: 
    eightBall = 'Reply hazy and try again.';
    break;
  case 3: 
    eightBall = 'Cannot predict now.';
    break;
  case 4:
    eightBall = 'Do not count on it.';
    break;  
  case 5:
    eightBall = 'My sources say no.';
    break;
  case 6:
    eightBall = 'Outlook not so good.';
    break;
  case 7:
    eightBall = 'Signs point to yes.';
    break;
}

console.log(eightBall);





// let userName = 'Bayo';
// userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
// let userQuestion = 'Will I become a ware wolf tonight';
// console.log(`So you asked, "${userQuestion}"?`);
// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall = '';

// switch (randomNumber) {
//   case 0:
//     eightBall = 'It is certain.';
//     break;
//   case 1: 
//     eightBall = 'It is decidedly so.';
//     break;
//   case 2: 
//     eightBall = 'Reply hazy and try again.';
//     break;
//   case 3: 
//     eightBall = 'Cannot predict now.';
//     break;
//   case 4:
//     eightBall = 'Do not count on it.';
//     break;  
//   case 5:
//     eightBall = 'My sources say no.';
//     break;
//   case 6:
//     eightBall = 'Outlook not so good.';
//     break;
//   case 7:
//     eightBall = 'Signs point to yes.';
//     break;
// }

// console.log(eightBall);