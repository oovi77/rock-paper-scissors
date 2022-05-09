console.log("test123");

  /*
  function add7(num1) {
    return (num1 + 7);
  }*/
  
    /*
  function capitalize(str1) {
   
  let temp = str1;
  let p1 = (temp.slice(1).toLowerCase());
  let p2 = (temp.slice(0, 1).toUpperCase());
  /*let capital = p2.concat(p1); */
    
    /*
  return p2.concat(p1);;
  }
  
  function lastLetter(str2) {
    return str2[str2.length-1];
  }
  console.log(lastLetter("abcd"));
    console.log(lastLetter("abcd "));
    console.log(lastLetter("abcdQqq zZ"));
  */

    console.log("test");
    

    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max-min) +min);
    }
      /*shows how Math.random actually works
      let temp = Math.random();
      let result = (temp * (max-min) + min);
      let answer = Math.floor(result);
      console.log(`Math.random is: ${temp} * ${max-min} = ${result} -> ${answer} `)
    } */
    
    function computerPlay() {
      
      let x = getRandomInt(0, 3);
      let throwRPS = '';
      
      if (x === 0){
        throwRPS = 'Rock';
      } else if (x === 1) {
        throwRPS = 'Paper';
      } else {
        throwRPS = 'Scissors';
      }
      
      return throwRPS;
    }


    
    
    function playRound (playerSelection, computerSelection) {
      let result = "";
      playerSelection = fixPlayerSelection(playerSelection);

      let playerWins = 1;
      let computerWins = 0;
      let tieGame = 2;

      if (playerSelection === computerSelection) {
        console.log("Tie Game!");
        result = tieGame;

      } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        console.log("You Win! Paper Beats Rock");
        result = playerWins;

      } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        console.log("You Lose! Scissors Beats Paper");
        result = computerWins;

      } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        console.log("You Win! Rock Beats Scissors");
        result = playerWins;

      } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        console.log("You Lose! Paper Beats Rock");
        result = computerWins;

      } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        console.log("You Win! Scissors Beats Paper");
        result = playerWins;

      } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        console.log("You Lose! Rock Beats Scissors");
        result = computerWins;

      } else {
          console.log("You Lose! Improper Input");
          result = computerWins;
      }
      
      return result;
    }
    
    
    
    
    

    function fixPlayerSelection (playerSelection) {

        let word = (playerSelection.slice(1).toLowerCase());
        let firstLetter = (playerSelection.slice(0, 1).toUpperCase());

        /*let capital = p2.concat(p1); */
          
          
        return firstLetter.concat(word);;
    }

    /*
    console.log(fixPlayerSelection('roCK'));
    console.log(fixPlayerSelection('ROCK'));
    console.log(fixPlayerSelection('ROcK'));
    console.log(fixPlayerSelection('Rock'));
    */
    
    /*
    test = prompt("Enter a number");
    console.log(test);
    
    test2 = prompt("Try Again");
    console.log(test2);
    */

    function game() {

        let playerScore = 0;
        let computerScore = 0;

        for (let i = 0; i < 5; i++){
            const computerSelection = computerPlay();
            const playerSelection = prompt("Please Enter Rock Paper or Scissors");

            gameResult = (playRound(playerSelection, computerSelection));

            /*
            let playerWins = 1;
            let computerWins = 0;
            let tieGame = 2;
            */

            if (gameResult === 0) {
                computerScore++;
            } else if (gameResult === 1) {
                playerScore++;
            } else {
                computerScore++;
                playerScore++;
            }


           
        
        }

        console.log("-----Game Over-----");
        if (playerScore > computerScore) {
            console.log("CONGRATULATIONS YOU WIN!")
        } else if (playerScore < computerScore) {
            console.log("YOU LOSE! GAME OVER!");
        } else {
            console.log("TIE GAME!");
        }

    }

    game();
    
