    const rockButton= document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorButton = document.querySelector("#scissorButton");
    rockButton.addEventListener("click", ()=>{
        let userChoice='rock';
        playGame(userChoice)});
    paperButton.addEventListener("click", ()=>{
        let userChoice='paper';
        playGame(userChoice)});
    scissorButton.addEventListener("click", ()=>{
        let userChoice='scissor';
        playGame(userChoice)});
    

    
    function playGame(userChoice){
        let computerSelection= getComputerChoice();
        //let userChoice = num;
        console.log(userChoice);
        console.log(computerSelection);

    }
        function getComputerChoice(){
        const availableChoices =["rock","paper","scissors"];
        let computerChoice=availableChoices[Math.floor(Math.random()*availableChoices.length)];
        return computerChoice;
    }