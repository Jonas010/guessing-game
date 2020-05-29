function jogo(fase) {
	console.log(fase);

	if (fase === 1){
		NumAdvinha = prompt("vou pensar em um número de 1 á:")
	}
	else if (fase === 2){
		mense.innerHTML = "bora lá...";
		number = Math.floor(Math.random()*NumAdvinha)+1
	}
	else if (fase === 3){
		mense.innerHTML = "tente advinhar o número!";
		document.querySelector('h1').style.display="none";
		entrada.setAttribute("style","display:block;");
		entrada.value=null;
		tentativas.style.marginTop="3%";
		
	}
	else {
		var tenta = document.getElementById('entrada').value;
		tentativas.innerHTML = fase-3;

		if (tenta == number) {
			entrada.style.display="none";
			mense.innerHTML = "acertou!";
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
var NumAdvinha;
let entrada = document.querySelector('input');
var tentativas = document.querySelector('h2'); // mostra o numero de tentativas a partir da fase 4
let mense = document.getElementById('msg'); //mensagem de se errou ou acertou
let next = document.querySelector("#next"); //botao pra mudar faze

next.addEventListener("click",function(){
	fase = fase+1;
	jogo(fase);
});