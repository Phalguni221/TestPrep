//Assign variables

let heartsCounter = 0
let spadesCounter = 0
let starsCounter = 0
//Assign buttons
   
let hearts_plus = document.getElementById("hearts_plus");
hearts_plus.addEventListener("click", function () {
    heartsCounter++;
    console.log("heartsCounter") 
    document.getElementById("hearts").textContent = heartsCounter
})

let hearts_minus = document.getElementById("hearts_minus");
hearts_minus.addEventListener("click", function () {
    heartsCounter--;
    console.log("heartsCounter") 
    document.getElementById("hearts").textContent = heartsCounter
})

let spades_plus = document.getElementById("spades_plus");
spades_plus.addEventListener("click", function () {
    spadesCounter++;
    console.log("spadesCounter") 
    document.getElementById("spades").textContent = spadesCounter
})

let spades_minus = document.getElementById("spades_minus");
spades_minus.addEventListener("click", function () {
    spadesCounter--;
    console.log("spadesCounter") 
    document.getElementById("spades").textContent = spadesCounter
})
  
let stars_plus = document.getElementById("stars_plus");
stars_plus.addEventListener("click", function () {
    starsCounter++;
    console.log("starsCounter") 
    document.getElementById("stars").textContent = starsCounter
})
  
let stars_minus = document.getElementById("stars_minus");
stars_minus.addEventListener("click", function () {
    starsCounter--;
    console.log("starsCounter") 
    document.getElementById("stars").textContent = starsCounter
})

 
    //Update Cookie count
        let updateScoreboard = function() {
    document.getElementById("hearts").textContent = Hearts;
    document.getElementById("spades").textContent = Spades;
    document.getElementById("stars").textContent = Stars;
    document.getElementById("Tally").textContent = Tally;
    }




