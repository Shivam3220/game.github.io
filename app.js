console.log(`Guess the number game`);

// initialise the variable used
let chancePara = document.getElementById("chancePara");
let menu = document.getElementById("menu");
let games = document.getElementById("game");
let userInputs = document.getElementById("userInputs");
let newgame = document.getElementById("newgame");
let title = document.getElementById("title");
let userGuesses = document.getElementById("userGuesses");

// generating the random Number
let computerNumber = Math.floor(Math.random() * 100+1)
// console.log(computerNumber);

// audio initialise
let audio = new Audio("pop.mp3");
let losseaudio = new Audio("losse.mp3");
let winaudio = new Audio("win.wav");


// creating the class 
class Game {
    // creating function to start game 
    start(trail) {
        let previousInput = []
        userInputs.addEventListener("change", function (event) {
            // console.log(previousInput.length)
            // console.log(Number(userInputs.value))
            let input = Number(userInputs.value)
            if(input>100||input<1){
                chancePara.innerText = "ENTER NUMBER BETWEEN 1-100 "
            }
            else{
            previousInput.push(input)
            // console.log(previousInput)
            userInputs.value = ""
            if (input < computerNumber) {
                chancePara.innerText = "THE NUMBER IS LOW"
            }
            else if (input > computerNumber) {
                chancePara.innerText = "THE NUMBER IS HIGH"
            }
            else {
                chancePara.innerText = "YOU WIN"
                userInputs.disabled = true;
                winaudio.play()
            }
            
            if (previousInput.length == trail) {
                chancePara.innerText = "YOU LOSSE"
                userInputs.disabled = true;
                losseaudio.play()
            }
        }

            let html=""
            previousInput.forEach(element => {
                html+=`<li>${element}</li>`
                userGuesses.innerHTML=html 
            });
        })

    }

}

// easy mode
let easyGame = document.getElementById("EASY");
easyGame.addEventListener("click", function (event) {
    // console.log(`click on easy`)
    audio.play();
    let trail = 10;
    chancePara.innerText = `YOU HAVE !0 ATTEMPT`
    menu.style.display = "none"
    games.classList.remove("gameNone");
    games.classList.add("gameBlock");
    let game = new Game
    game.start(trail)

})

// hard mode
let hardGame = document.getElementById("Hard");
hardGame.addEventListener("click", function (event) {
    // console.log(`click on hard`)
    let trail = 5;
    audio.play();
    chancePara.innerText = `YOU HAVE 5 ATTEMPT`
    menu.style.display = "none"
    games.classList.remove("gameNone");
    games.classList.add("gameBlock");
    let game = new Game
    game.start(trail)
   

})


// creating function to start new game
newgame.addEventListener("click", function (e) {
    audio.play();
    location.reload(e)
})

