function agregar(){
	var tareas = document.getElementById("tarea").value; /*recuperamos texto ingresado en textarea*/
	document.getElementById("tarea").value = ""; /*limpio textarea*/
	
	var cont = document.getElementById("contenedor"); /*donde van a estar las tareas q recupere*/

	var nuevasTareas = document.createElement("div"); /*creacion nodos elementos*/
	var textoNuevaTarea = document.createTextNode(tareas); /*creacion nodos elementos, va sin comillas por que es el contenido guardado no la palabra tareas*/
	var elementoContenedor = document.createElement("span"); /*creacion nodos elementos*/

	elementoContenedor.appendChild(textoNuevaTarea); /*asignamos padres a nodos creados*/
	nuevasTareas.appendChild(elementoContenedor);/*asignamos padres a nodos creados*/
	cont.appendChild(nuevasTareas);/*asignamos padres a nodos creados*/

	var chck = document.createElement("input"); /*creamos checkbox e iconos, dandoles atributos y clases*/
	chck.type = "checkbox";
	chck.setAttribute("class", "chck");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	nuevasTareas.appendChild(chck); /*asignamos padres a nodos creados*/
	nuevasTareas.appendChild(basura); /*asignamos padres a nodos creados*/
	nuevasTareas.appendChild(cora); /*asignamos padres a nodos creados*/

	chck.addEventListener("click", function(){ /*agregamos evento al hacer clic, eliminar o agregar tachado contenedor*/
		elementoContenedor.classList.toggle("tachado");
	})
	basura.addEventListener("click", function(){/*removemos icono basurero al clic*/
		cont.removeChild(nuevasTareas);
	})
	cora.addEventListener("click", function(){ /*funcion click para <3 clase rojo*/
		cora.classList.toggle("red");
	})

}







