function lifeInWeeks(age) {
   
    /************Don't change the code above************/    
       const yearsLeft = 90 - age;
       const monthsLeft = yearsLeft * 12;
       const weeksLeft = yearsLeft * 52;
       const daysLeft = yearsLeft * 365;
      
       console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, ${monthsLeft} month left`);
       document.getElementById('output').textContent = output;

    
}
lifeInWeeks(37);


function loveCalculator(name1, name2) {
    // Generate a random percentage between 0 and 100
    const randomPercentage = Math.floor(Math.random() * 101);
    
    // Return the message
    console.log(`${name1} and ${name2} are ${randomPercentage}% match!!`);
}
loveCalculator(saheed, ife);

