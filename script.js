    const rockButton= document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorButton = document.querySelector("#scissorButton");
    const resultContainer= document.querySelector("#resultContainer");
    const resultDiv= document.createElement('div');
    const playerScore=document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerSCore");
    const playerResultDiv= document.createElement('div');
    const computerResultDiv= document.createElement('div');
    const playerResultContainer =  document.querySelector("#playerScore");
    const computerResultContainer = document.querySelector("#computerScore");
    let computerWins=0;
    let playerWins=0;
    computerResultDiv.textContent=`${computerWins}`;
    playerResultDiv.textContent=`${playerWins}`;
    playerResultContainer.append(playerResultDiv);
    computerResultContainer.append(computerResultDiv);
    rockButton.addEventListener("click", ()=>{
        let userChoice='rock';
        playGame(userChoice)});
    paperButton.addEventListener("click", ()=>{
        let userChoice='paper';
        playGame(userChoice)});
    scissorButton.addEventListener("click", ()=>{
        let userChoice='scissors';
        playGame(userChoice)});
    

    
    function playGame(userChoice){
        let computerChoice= getComputerChoice();
        //let userChoice = num;
        console.log(userChoice);
        console.log(computerChoice);
        if(userChoice==computerChoice){
            resultDiv.textContent=`It is a tie. Both chose ${userChoice}`;
            resultContainer.append(resultDiv);

        }
        if(userChoice=="rock")
        {

            if(computerChoice=="paper")
            {
                resultDiv.textContent=`Computer wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                computerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);

            }
            if(computerChoice=="scissors")
            {
                resultDiv.textContent=`Player Wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                playerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);
            }
        }
        if(userChoice=="paper")
        {

            if(computerChoice=="rock")
            {
                resultDiv.textContent=`Player Wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                playerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);
            }
            if(computerChoice=="scissors")
            {
                resultDiv.textContent=`Computer wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                computerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);
            }
        }
        if(userChoice=="scissors")
        {

            if(computerChoice=="rock")
            {
                resultDiv.textContent=`Computer wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                computerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);
            }
            if(computerChoice=="paper")
            {
                resultDiv.textContent=`Player Wins!! You chose ${userChoice} Computer chose ${computerChoice}`;
                resultContainer.append(resultDiv);
                playerWins++;
                computerResultDiv.textContent=`${computerWins}`;
                playerResultDiv.textContent=`${playerWins}`;
                playerResultContainer.append(playerResultDiv);
                computerResultContainer.append(computerResultDiv);
            }
        }
        

    }
        function getComputerChoice(){
        const availableChoices =["rock","paper","scissors"];
        let computerChoice=availableChoices[Math.floor(Math.random()*availableChoices.length)];
        return computerChoice;
    }
