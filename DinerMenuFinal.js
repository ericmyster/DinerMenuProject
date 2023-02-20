const MainMenu = {
    'Cheeseburger' : 12,
    'Hamburger' : 10, 
    'Western Burger' : 13, 
    'Hangover Burger' : 14 
}
const Sides = {
    'Fries' : 4,
    'Coleslaw' : 3,
    'Fruit' : 5,
    'Onion-Rings' : 6
}
// const Choice = menu => {
//   let newValue = []
//   Object.keys(menu).map(item => {
//     newValue.push(` ${item}`)
//   })
//   return newValue.join()
// }
const Welcome = (MainMenu) => {  
    const EntreeAnswer = prompt(`Welcome to our diner Today, we have your choice of ${Object.keys(MainMenu)}`)
    
  if (EntreeAnswer.toUpperCase() == Object.keys(MainMenu)[0].toUpperCase()) {
    confirm(`Excellent Choice! That will be $${Object.values(MainMenu)[0]}`);
    return Object.values(MainMenu)[0]
  } 
  else if (EntreeAnswer.toUpperCase() == Object.keys(MainMenu)[1].toUpperCase()) {
    confirm(`Sounds Good. That will be $${Object.values(MainMenu)[1]}`);
    return Object.values(MainMenu)[1]
  } 
  else if (EntreeAnswer.toUpperCase() == Object.keys(MainMenu)[2].toUpperCase()) {
    confirm(`You'll like that one. That will be $${Object.values(MainMenu)[2]}`);
    return Object.values(MainMenu)[2]
  }
  else if (EntreeAnswer.toUpperCase() == Object.keys(MainMenu)[3].toUpperCase()) {
    confirm(`Ah yes breakfast is also good on a burger. That will be $${Object.values(MainMenu)[3]}`);
    return Object.values(MainMenu)[3]
  }
  else  {
    prompt ("I will come back when you are ready to order.");
  } 
}
const SidesChoice = (Sides) => {
  const SidesAnswer = prompt(`You also have a choice of two sides which include ${Object.keys(Sides)}.  What will be your first side?`)
  
  if (SidesAnswer.toUpperCase() == Object.keys(Sides)[0].toUpperCase()) {
    confirm(`Excellent Choice! That will be $${Object.values(Sides)[0]}`);
    return Object.values(Sides)[0]
  } 
  else if (SidesAnswer.toUpperCase() == Object.keys(Sides)[1].toUpperCase()) {
    confirm(`Sounds Good. That will be $${Object.values(Sides)[1]}`);
    return Object.values(Sides)[1]
  } 
  else if (SidesAnswer.toUpperCase() == Object.keys(Sides)[2].toUpperCase()) {
    confirm(`You'll like that one. That will be $${Object.values(Sides)[2]}`);
    return Object.values(Sides)[2]
  }
  else if (SidesAnswer.toUpperCase() == Object.keys(Sides)[3].toUpperCase()) {
    confirm(`My favorite. That will be $${Object.values(Sides)[3]}`);
    return Object.values(Sides)[3]
  }
  else  {
    prompt ("I will come back when you are ready to order.");
  }  
}
const SidesChoiceTwo = (Sides) => {
  const SidesAnswerTwo = prompt(`You also have a choice of two sides which include ${Object.keys(Sides)}.  What will be your second side?`)
  
  if (SidesAnswerTwo.toUpperCase() == Object.keys(Sides)[0].toUpperCase()) {
    confirm(`Excellent Choice! That will be $${Object.values(Sides)[0]}`);
    return Object.values(Sides)[0]
  } 
  else if (SidesAnswerTwo.toUpperCase() == Object.keys(Sides)[1].toUpperCase()) {
    confirm(`Sounds Good. That will be $${Object.values(Sides)[1]}`);
    return Object.values(Sides)[1]
  } 
  else if (SidesAnswerTwo.toUpperCase() == Object.keys(Sides)[2].toUpperCase()) {
    confirm(`You'll like that one. That will be $${Object.values(Sides)[2]}`);
    return Object.values(Sides)[2]
  }
  else if (SidesAnswerTwo.toUpperCase() == Object.keys(Sides)[3].toUpperCase()) {
    confirm(`My favorite. That will be $${Object.values(Sides)[3]}`);
    return Object.values(Sides)[3]
  }
  else  {
    prompt ("I will come back when you are ready to order.");
  } 
}

console.log(Welcome(MainMenu));
console.log(SidesChoice(Sides));
console.log(SidesChoiceTwo(Sides));



const total = (Welcome(MainMenu) + SidesChoice(Sides) + SidesChoiceTwo(Sides) );
console.log(total)

/*
const entrecomments = {
  "hamburger": "hey you're3 killing cows for that, but that will be 7.6"
}

 console.log(`the $[{EntreeAnswer}? ${entrecomments[EntreeAnswer]}`)
// console.log(Object.values(MainMenu)[0]);
  // console.log(Choice(MainMenu));

*/