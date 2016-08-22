Deer.Stage = function Stage(options) {

	if (typeof options.name !== 'string' || options.name === '') {
		throw "Deer.Stage.options.name undefined";
	}

	this.name = options.name;
	this.background = options.background;

};
