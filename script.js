let userchoice = prompt ("Choose your weapon");
alert (userchoice);



let computernumber = Math.random ();
if (computernumber <=0.33) {
    alert ("rock")
    computerChoice = "rock"
}
else if ((computernumber>=0.34) & (computernumber<=0.66)){
    alert ("paper");
    computerChoice= "paper"
}
else {
    alert ("scissor")
    computerChoice = "scissor"
}
   

if (userchoice == computerChoice){
    alert ("it's a match")
}

else if ((userchoice == "rock") && (computerChoice=="paper")) {
    alert ("You lose")
}

else if ((userchoice == "paper") && (computerChoice == "rock")){
    alert ("You win")
}

else if ((userchoice == "scissor") && (computerChoice== "paper")){
    alert ("You win")
}

else if ((userchoice == "rock") && (computerChoice== "scissor")){
    alert ("You win")
}

else if ((userchoice == "paper") && (computerChoice=="scissor")) {
    alert ("You lose")
}  

else if ((userchoice == "scissor") && (computerChoice=="rock")) {
    alert ("You lose")
}
    