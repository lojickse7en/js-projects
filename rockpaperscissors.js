//user should be able to choose rock, paper or scissors when the game starts
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); //convert input to lowercase
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput; // Ensure user has typed in a valid choice or rock paper or scissors. 
    } else {
      console.log('Error, please type: rock, paper or scissors.')
    }
  }
  
  //Ensure the computer opponent makes a randomized choice of rock, paper, or scissors
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
  
    }
  };
  
  //conditional statements to determine which choice beats what
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'This game is a tie!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, the computer won!'
      } else { 
        return 'Congratulations, you won!'
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, the computer won!'
      } else {
        return 'Congratulations, you won!'
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, the computer won!'
      } else {
        return 'Congratulations, you won!'
      }
    }
  };
  
  //start the game with results logged
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();