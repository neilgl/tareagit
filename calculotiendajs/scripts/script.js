
var iva1 = 0.19;
var iva2 = 0.10;

function iva(a, b) {
	
	var resultadoiva = a * b;
	return resultadoiva;
}

function subtotal(x, y){

	var subtotales = x * y;
	return subtotales;
}

function calcular() {//El nombre de esta funcion debe ser igual al nombre id del boton para ejecutar lo que hay en esta funcion al oprimir el boton

	var cantidadpan = document.getElementById("canpan").value; //de esta forma se recibe o toma el dato de la caja de texto
	var valorpan = document.getElementById("valpan").value;

	var cantidadleche = document.getElementById("canleche").value;
	var valorleche = document.getElementById("valleche").value;

	var cantidadhuevos = document.getElementById("canhuevos").value;
	var valorhuevos = document.getElementById("valhuevos").value;

	var cantidadjabon = document.getElementById("canjabon").value;
	var valorjabon = document.getElementById("valjabon").value;

	var cantidadshampoo = document.getElementById("canshampoo").value;
	var valorshampoo = document.getElementById("valshampoo").value;

	var cantidadcrema = document.getElementById("cancrema").value;
	var valorcrema = document.getElementById("valcrema").value;

	subpan = subtotal(cantidadpan, valorpan);
	subleche = subtotal(cantidadleche, valorleche);
	subhuevos = subtotal(cantidadhuevos, valorhuevos);

	subjabon = subtotal(cantidadjabon, valorjabon);
	subshampoo = subtotal(cantidadshampoo, valorjabon);
	subcrema = subtotal(cantidadcrema, valorcrema);

	subcomida = subpan + subleche + subhuevos;
	subaseo = subjabon + subshampoo + subcrema;

	document.getElementById("sub1").value = subcomida; //de esta forma se envia o transmite el dato a la caja ed texto
	document.getElementById("sub2").value = subaseo;

	subtot = subcomida + subaseo; //no debo poner subtotal ya que genera concflicto con el nombre de la funcion subtotal, por ello solo dejo subtot.
	document.getElementById("subtotal").value = subtot;

	ivacomida = iva(subcomida, iva1);
	ivaaseo = iva(subaseo, iva2);

	document.getElementById("iva1").value = ivacomida;
	document.getElementById("iva2").value = ivaaseo;

	ivatotal = ivacomida + ivaaseo;
	document.getElementById("iva").value = ivatotal;

	total = subtot + ivatotal;
	document.getElementById("total").value = total;
}


