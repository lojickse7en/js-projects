const getSleepHours = day => {

    //The function will accept a day as an argument and return the number of hours you slept that night.
      switch(day) {
        case 'monday':
          return 8
          break;
        case 'tuesday':
          return 7
          break;
        case 'wednesday':
          return 9
          break;
        case 'thursday':
          return 10
          break;
        case 'friday':
          return 8
          break;
        case 'saturday':
          return 7
          break;
        case 'sunday':
          return 6
          break;
        default: 
          return 'Error!'
      }
    };
    
    //get the total sleep hours you actually get
    const getActualSleepHours = () => 
      getSleepHours('monday') + 
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');
    
    console.log("Hours Slept: " + getActualSleepHours() + " hrs");
    
    //Ideal sleep the one would prefer
    const getIdealSleepHours = () => {
      let idealHours = 9
      return idealHours * 7;
    }
    
    //sleep debt calculation
    const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
    
     if(actualSleepHours === idealSleepHours) {
       console.log("You've got the perfect amount of sleep!");
     }
     else if(actualSleepHours > idealSleepHours) {
       console.log("You've got " + (idealSleepHours - actualSleepHours) + " more of sleep this week");
     }
     else if(actualSleepHours < idealSleepHours) {
       console.log("You should get some rest because you selpt " + (idealSleepHours - actualSleepHours) + " less than you should have this week.");
     }
     else {
       console.log('Error! Something went wrong, check your code.');
     }
    };
    
    calculateSleepDebt();
    