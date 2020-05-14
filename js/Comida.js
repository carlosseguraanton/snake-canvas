class Comida extends Objeto {

	constructor() {
		super();

		this.x = this.generar();
		this.y = this.generar();

	}

	generar() {

		let num = (Math.floor(Math.random() * 59)) * 10;

		return num;

	}

	colocar() {

		this.x = this.generar();
		this.y = this.generar();

	}

	dibujar(ctx) {

		ctx.fillStyle = "#FF0000";

		ctx.fillRect(this.x, this.y, this.tamanio, this.tamanio);

	}

}