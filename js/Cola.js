class Cola extends Objeto {

	constructor(x, y) {
		super();

		this.x = x;
		this.y = y;

		this.siguiente = null;

	}

	dibujar(ctx) {

		if (this.siguiente != null) {

			this.siguiente.dibujar(ctx);

		}

		ctx.fillStyle = "#0000FF";

		ctx.fillRect(this.x, this.y, this.tamanio, this.tamanio);

	}

	setxy(x, y) {

		if (this.siguiente != null) {

			this.siguiente.setxy(this.x, this.y);

		}

		this.x = x;
		this.y = y;

	}

	meter() {

		if (this.siguiente == null) {

			this.siguiente = new Cola(this.x, this.y);

		} else {

			this.siguiente.meter();

		}

	}

	verSiguiente() {

		return this.siguiente;

	}

}