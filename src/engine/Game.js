Deer.Game = function Game(containerId, width, height) {

	this.canvas = Deer.Canvas(containerId, width, height);

	if (typeof width === 'number') {
		this.width = width;
	}
	else {
		this.width = 350;
	}

	if (typeof height === 'number') {
		this.height = height;
	}
	else {
		this.height = 600;
	}

	return this;

};