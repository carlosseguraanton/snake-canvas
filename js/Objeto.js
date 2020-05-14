class Objeto {

	constructor() {

		this.tamanio = tamanio;

	}

	choque(obj) {

		let difx = Math.abs(this.x - obj.x);
		let dify = Math.abs(this.y - obj.y);

		if (difx >= 0 && difx < tamanio && dify >= 0 && dify < tamanio) {

			return true;

		} else {

			return false;

		}

	}

}