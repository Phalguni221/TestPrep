
let heartsCounter = localStorage.getItem("heartsCounter")
if (!heartsCounter) {
   heartsCounter = 0
}
localStorage.setItem("heartsCounter", heartsCounter)
document.getElementById("hearts").textContent = heartsCounter
document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
 
let spadesCounter = localStorage.getItem("spadesCounter")
if (!spadesCounter) {
   spadesCounter = 0
}
localStorage.setItem("spadesCounter", spadesCounter)
document.getElementById("spades").textContent = spadesCounter
document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
 
let starsCounter = localStorage.getItem("starsCounter")
if (!starsCounter) {
   starsCounter = 0
}
localStorage.setItem("starsCounter", starsCounter)
document.getElementById("stars").textContent = starsCounter
document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
 
//Assign buttons
   
let hearts_plus = document.getElementById("hearts_plus");
hearts_plus.addEventListener("click", function () {
	heartsCounter++;
    console.log("heartsCounter") 
    localStorage.setItem("heartsCounter", heartsCounter)
    document.getElementById("hearts").textContent = heartsCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
 
let hearts_minus = document.getElementById("hearts_minus");
hearts_minus.addEventListener("click", function () {
	if(heartsCounter>0){heartsCounter--;}
    console.log("heartsCounter") 
    localStorage.setItem("heartsCounter", heartsCounter)
    document.getElementById("hearts").textContent = heartsCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
 
let spades_plus = document.getElementById("spades_plus");
spades_plus.addEventListener("click", function () {
    spadesCounter++;
    console.log("spadesCounter") 
    localStorage.setItem("spadesCounter", spadesCounter)
    document.getElementById("spades").textContent = spadesCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
 
let spades_minus = document.getElementById("spades_minus");
spades_minus.addEventListener("click", function () {
    if(spadesCounter>0){spadesCounter--;}
    console.log("spadesCounter") 
    localStorage.setItem("spadesCounter", spadesCounter)
    document.getElementById("spades").textContent = spadesCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
  
let stars_plus = document.getElementById("stars_plus");
stars_plus.addEventListener("click", function () {
    starsCounter++;
    console.log("starsCounter")
    localStorage.setItem("starsCounter", starsCounter)
    document.getElementById("stars").textContent = starsCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
  
let stars_minus = document.getElementById("stars_minus");
stars_minus.addEventListener("click", function () {
    if(starsCounter>0){starsCounter--;}
    console.log("starsCounter") 
    localStorage.setItem("starsCounter", starsCounter)
    document.getElementById("stars").textContent = starsCounter
	document.getElementById("Tally").textContent = Number(localStorage.getItem("heartsCounter")) + Number(localStorage.getItem("spadesCounter")) + Number(localStorage.getItem("starsCounter"))
})
 
 
    //Update Cookie count
        let updateScoreboard = function() {
    document.getElementById("hearts").textContent = Hearts;
    document.getElementById("spades").textContent = Spades;
    document.getElementById("stars").textContent = Stars;
    document.getElementById("Tally").textContent = Tally;
    }
 
 
 
 
 






