//Variables globales

let velocidad = 100;
let tamanio = 10;

//Objetos del juego

let cabeza = new Cola(20, 20);
let comida = new Comida();

let ejex = true;
let ejey = true;

let xdir = 0;
let ydir = 0;

function movimiento() {

	let nx = cabeza.x + xdir;
	let ny = cabeza.y + ydir;

	cabeza.setxy(nx, ny);

}

function control(event) {

	// document.addEventListener("keydown", (event) => {}

	let keyCode = event.keyCode;

	if (ejex) {

		if (keyCode == 38) {

			ydir = -tamanio;
			xdir = 0;

			ejex = false;
			ejey = true;

		}

		if (keyCode == 40) {

			ydir = tamanio;
			xdir = 0;

			ejex = false;
			ejey = true;

		}

	}

	if (ejey) {

		if (keyCode == 37) {

			ydir = 0;
			xdir = -tamanio;

			ejey = false;
			ejex = true;

		}

		if (keyCode == 39) {

			ydir = 0;
			xdir = tamanio;

			ejey = false;
			ejex = true;

		}

	}

}

function findeJuego() {

	xdir = 0;
	ydir = 0;

	ejex = true;
	ejey = true;

	cabeza = new Cola(20, 20);
	comida = new Comida();

	alert("Perdiste");

}

function choquepared() {

	if (cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590) {

		findeJuego();

	}

}

function choquecuerpo() {

	let temp = null;

	try {

		temp = cabeza.verSiguiente().verSiguiente();

	} catch (err) {

		temp = null;

	}

	while (temp != null) {

		if (cabeza.choque(temp)) {

			//fin de juego

			findeJuego();

		} else {

			temp = temp.verSiguiente();

		}

	}

}

function dibujar() {

	let canvas = document.getElementById("canvas");

	let ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//aquí abajo va todo el dibujo

	cabeza.dibujar(ctx);
	comida.dibujar(ctx);

}

function main() {

	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();

	if (cabeza.choque(comida)) {

		comida.colocar();

		cabeza.meter();

	}

}

setInterval("main()", velocidad);


