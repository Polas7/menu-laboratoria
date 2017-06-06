/*funcion del click*/
function boton(){
	var lista = document.getElementById("chao");
	lista.setAttribute("class", "new");

    var elemento = Array.from(document.getElementsByClassName("chao"));
      elemento.forEach(function(el){
    el.setAttribute("class", "new");
  });
}
 
 function test(){
 	var botonStart = document.getElementById("hola");
	botonStart.addEventListener("click", boton);
}
 test();