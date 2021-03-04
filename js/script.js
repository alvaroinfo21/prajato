//pega todos os itens da lista
const menuItems = document.querySelectorAll("#navbar-links a");

//para cada item da lista existe uma escuta de evento de clique
menuItems.forEach(item => {

	/*
	toda função que é passada como callback de um evento pode receber como 
	parâmetro o event que é o evento. 
	event guarda todas as propriedades de um evento. 
	Dentre essas propriedades a que nos interessa nesse momento é o target 
	que é qual o elemento html que está sendo clicado. 
	*/
	item.addEventListener("click", scrollToIdOnClick);
	
})

//essa função faz o scroll para cada id
function scrollToIdOnClick(event){

	event.preventDefault();

	const elemento = event.target; //guarda o elemento HTML que foi clicado

	const id = elemento.getAttribute('href'); //guarda o atributo do elemento HTML clicado

	/*Em relação ao topo do site, a const "para" guarda a posição do 
	elemento na página identificado pelo atributo href (const id)*/
	const para = document.querySelector(id).offsetTop;

	
	window.scroll({
		top: para - 150,
		behavior: "smooth"

	});


}


document.addEventListener("DOMContentLoaded", function(event) {

	const links = document.querySelectorAll("#navbar-links a");

	for(var x=0; x<links.length; x++){

		links[x].onclick = function(){
		   document.querySelector("button.navbar-toggler").click();
		}
		
	 }
});
