const userChoiceDisplay =document.getElementById('user-choice')
const computerChoiceDisplay =document.getElementById('computer-choice')
const userResult = document.getElementById('your-score')
const computerResult = document.getElementById('computer-score')
const resultDisplay = document.getElementById('result')


let userChoice
let computerChoice
let result
let contador = 0
let computerCount = 0 




const yourChoice = document.querySelectorAll('button')
yourChoice.forEach((button) => {
    button.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.textContent = userChoice
        computerNumber()
        getResult()
    });
});

function computerNumber (){
    const computerNumber = Math.random();
    if (computerNumber <=0.33) {
        computerChoice = "rock"
        }
        else if ((computerNumber>=0.34) & (computerNumber<=0.66)){
            computerChoice= "paper"
        }
        else {
            computerChoice = "scissors"
        }
computerChoiceDisplay.textContent = computerChoice
}

function getResult() {
    if (userChoice === computerChoice){
        //alert ("it's a match")
        result= 'Its a match'
        }
    
    if ((userChoice === "rock") && (computerChoice ==="paper")) {
        //alert ("You lose")
        result= 'You lose'
    }
    
    if ((userChoice == "paper") && (computerChoice == "rock")){
        //alert ("You win")
        result= 'You win'
    }
    
    if ((userChoice == "scissors") && (computerChoice== "paper")){
        //alert ("You win")
        result= 'You win'
    }
    
    if ((userChoice == "rock") && (computerChoice== "scissors")){
        //alert ("You win")
        result= 'You win'
    }
    
    if ((userChoice== "paper") && (computerChoice=="scissors")) {
        //alert ("You lose")
        result= 'You lose'
    }  
    
    if ((userChoice == "scissors") && (computerChoice=="rock")) {
        //alert ("You lose")
        result= 'You lose'
    }
    resultDisplay.textContent = result
    
    if (contador <5){
        if(result === 'You win'){
        contador++
        }
    userResult.textContent = contador   
    }
    else alert('You win')
    
    if (computerCount<5){
    if (result === 'You lose'){
        computerCount++ 
    }
    computerResult.textContent = computerCount   
    }
    else alert ('You lose')
   
       
}





// const selectionButtons = document.querySelectorAll('[data-selection]');

// selectionButtons.forEach(selectionButton => {
//     selectionButton.addEventListener('click', e => {
//         const selectionName = selectionButton.dataset.selection;
//         makeSelection(selectionName);
//         //console.log(selectionName);
    
//         function makeSelection(selection) {
//         };           
    
//     });
// });


   