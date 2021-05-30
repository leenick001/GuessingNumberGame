var userInput = document.getElementById('userInput');


var enterBtn = document.getElementById('enterBtn');


var restartBtn = document.getElementById('restartBtn');


var gameResponse = document.getElementById('gameResponse');


var triesText = document.getElementById('tries');


var winningNumber = 0;


winningNumber = Math.floor(Math.random() * 1000) + 1;


var numOfTries = 15;





function gameOver()


{  

    gameResponse.style.color = 'red';


    gameResponse.innerText = 'You lose...';


    userInput.style.display = 'none';


    enterBtn.style.display = 'none';


    triesText.style.display = 'none';


    restartBtn.style.display = 'block';



}


function startOver(){


    gameResponse.style.color = 'red';


    gameResponse.innerText = '';


    userInput.style.display = 'block';


    userInput.value = '';


    enterBtn.style.display = 'block';


    triesText.style.display = 'block';


    restartBtn.style.display = 'none';


    numOfTries = 5;


    winningNumber = Math.floor(Math.random() * 1000) + 1;


}



function formatTriesText(){


    if(numOfTries < 3){


        triesText.style.color = 'red';


        triesText.innerText = `Tries left: ${numOfTries}`;


    }else{


        triesText.style.color = 'black';


        triesText.innerText = `Tries left: ${numOfTries}`;


    }


}





function createResponse(numToCheck) { 


    numOfTries--;





    if(numOfTries == -1){


        gameOver();


        return;


    }





    formatTriesText();





    if(Math.abs(numToCheck - winningNumber) >= 900){


        gameResponse.style.color = 'purple';

        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number

            gameResponse.innerText = 'You\'re super cold...  higher';


        }else{


            gameResponse.innerText = 'You\'re super cold...  lower';


        }


    }else if(Math.abs(numToCheck - winningNumber) < 900 && Math.abs(numToCheck - winningNumber) >= 500){


        gameResponse.style.color = 'red';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re WAY way WAAAAAAAAAAAY off go higher';


        }else{

            gameResponse.innerText = 'You\'re WAY way WAAAAAAAAAAAY off go lower';

        }


    }else if(Math.abs(numToCheck - winningNumber) < 500 && Math.abs(numToCheck - winningNumber) >= 300){



        gameResponse.style.color = 'pink';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re closer but still way off go higher';


        }else{


            gameResponse.innerText = 'You\'re closer but still way off go lower';


        }


    }else if(Math.abs(numToCheck - winningNumber) < 300 && Math.abs(numToCheck - winningNumber) >= 100){


        gameResponse.style.color = 'orange';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re getting closer go higher';


        }else{


            gameResponse.innerText = 'You\'re getting closer go lower';


        }


    }else if(Math.abs(numToCheck - winningNumber) < 100 && Math.abs(numToCheck - winningNumber) >= 50){


        gameResponse.style.color = 'yellow';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re realllllllly close now go higher';


        }else{


            gameResponse.innerText = 'You\'re realllllllly close now go lower';


        }


    }else if(Math.abs(numToCheck - winningNumber) < 50 && Math.abs(numToCheck - winningNumber) >= 10){


        gameResponse.style.color = 'green';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re suuuuuuper close go higher';


        }else{


            gameResponse.innerText = 'You\'re suuuuuuper close go lower';


        }


    }else if(Math.abs(numToCheck - winningNumber) < 10){


        gameResponse.style.color = 'green';


        if(numToCheck - winningNumber < 0){


            //user inputted number is less than the winning number


            gameResponse.innerText = 'You\'re suuuuuuper duuuuuuper close go higher';


        }else{


            gameResponse.innerText = 'You\'re suuuuuuper duuuuuuper close go lower';


        }


    }else{


        gameResponse.style.color = 'red';


        gameResponse.innerText = 'I don\'t know...';


    }


}


function checkValue(numberToCheck = 0,enterKeyPress = 0){


    if(enterKeyPress){


        numberToCheck = Number(userInput.value);


        console.log(winningNumber);


        if(numberToCheck != winningNumber){


            createResponse(numberToCheck);


        }else{


            gameResponse.style.color = 'green';


            gameResponse.innerText = 'You wiiiiiiiiin!';


            userInput.style.display = 'none';


            enterBtn.style.display = 'none';


            triesText.style.display = 'none';


            restartBtn.style.display = 'block';


        }


    }else{


        numberToCheck = Number(userInput.value);





        if(numberToCheck != winningNumber){


            createResponse(numberToCheck);


        }else{


            gameResponse.style.color = 'green';
            gameResponse.style.fontSize = 12;

            gameResponse.innerText = 'You wiiiiiiiiin!';


            userInput.style.display = 'none';


            enterBtn.style.display = 'none';


            triesText.style.display = 'none';


            restartBtn.style.display = 'block';


        }


    }


}





userInput.addEventListener('keypress',function(e){


    if(e.keyCode == 13){


        console.log('value of keypress:',e.target.value);








        checkValue(Number(e.target.value),1);


    }


});