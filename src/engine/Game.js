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

	this.stage = null;

	return this;

};

Deer.Game.prototype.add = function add(type, options) {

	if (!type)
		throw "Deer.Game.add.type undefined";

	if (!options)
		throw "Deer.Game.add.options undefined";

	switch (type) {
		case 'stage':
			this.stage = new Deer.Stage(options);
			break;
	}
	
};