function game(level) {
	console.log(level);

	if (level === 1){
		
		GuessNum = prompt("Guess from 1 to:");

		if (isNaN(GuessNum)){
			alert("Just numbers.");
			window.location.assign("index.html");
		}
		else if (GuessNum == null) {
			alert("Try again.");
			window.location.assign("index.html")
		}
		else if (GuessNum <= 12) {
			alert("Are you testing the game?");
		}
		else if (GuessNum <= 100) {
			alert("you have courage.");
		}
		else {
			alert("hmm... i'll have fun!");
		}

	}
	//else if (level === 2){
	//	mense.innerHTML = "let's go...";
	//	number = Math.floor(Math.random()*GuessNum)+1
	//}
	
	else if (level === 2){
		mense.innerHTML = "Try guess the number!";
		document.querySelector('#next').innerHTML = "Next";
		

		number = Math.floor(Math.random()*GuessNum)+1 //to generate the random number

		document.querySelector('h1').style.display="none";
		entrada.setAttribute("style","display:block;");
		entrada.value=null;
		att.style.marginTop="3%";
		
	}
	else {
		var Try = document.getElementById('entrada').value;
		att.innerHTML = level-2;

		if (Try == number) {
			entrada.style.display="none";
			mense.innerHTML = "you got it!";
			mense.style.color = "green";
			next.style.display="none";
			document.querySelector('a').style.display="block";
		}
		else if (Try > number) {
			mense.innerHTML = "smaller";
		}
		else if (Try < number) {
			mense.innerHTML = "bigger";
		}
	}
}

var level =0;
var number;
var GuessNum;
let entrada = document.querySelector('input');
var att = document.querySelector('h2'); // show the attempts number at the level 4
let mense = document.getElementById('msg'); //wrong or right mensaje
let next = document.querySelector("#next"); //button to next level

next.addEventListener("click",function(){
	level = level+1;
	game(level);
});
