function jogo(fase) {
	console.log(fase);

	if (fase === 1){
		numAdvinha = prompt("vou pensar em um número de 1 á:")
		
		//apenas algumas brincadeiras para ficar mais divertido.
		if (isNaN(numAdvinha)){
			alert("apenas números.");
			window.location.assign("game.html");
		}
		else if (numAdvinha == null) {
			alert("tente outra vez.");
			window.location.assign("game.html")
		}
		else if (numAdvinha <= 12) {
			alert("Está testando o jogo?");
		}
		else if (numAdvinha <= 100) {
			alert("Você tem coragem.");
		}
		else {
			alert("hmm... um oponente a altura!");
		}
	}
	
	else if (fase === 2){
		mense.innerHTML = "tente advinhar o número!";
		document.querySelector('#next').innerHTML = "Proximo";
		document.querySelector('h1').style.display="none";
		
		number = Math.floor(Math.random()*numAdvinha)+1 //para gerar o número aleatório
		
		entrada.setAttribute("style","display:block;");
		entrada.value=null;
		tentativas.style.marginTop="3%";
		
	}
	else {
		var tenta = document.getElementById('entrada').value;
		tentativas.innerHTML = fase-2;

		if (tenta == number) {
			entrada.style.display="none";
			mense.innerHTML = "acertou!";
			mense.style.color = "green";
			next.style.display="none";
			document.querySelector('a').style.display="block";
		}
		else if (tenta > number) {
			mense.innerHTML = "menor";
		}
		else if (tenta < number) {
			mense.innerHTML = "maior";
		}
	}
}

var fase =0;
var number;
var numAdvinha;
let entrada = document.querySelector('input');
var tentativas = document.querySelector('h2'); // mostra o numero de tentativas a partir da fase 4
let mense = document.getElementById('msg'); //mensagem de se errou ou acertou
let next = document.querySelector("#next"); //botao pra mudar faze

next.addEventListener("click",function(){
	fase = fase+1;
	jogo(fase);
});
