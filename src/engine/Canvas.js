Deer.Canvas = function Canvas(containerId, width, height) {
	
	if (typeof containerId === 'string' && containerId !== '') {
		this.container = document.getElementById(containerId);
	}
	else {
		this.container = document.getElementsByTagName('body')[0];
	}
	
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

	this.canvasElement = document.createElement('canvas');
	this.canvasElement.width = this.width;
	this.canvasElement.height = this.height;
	this.canvasElement.style.display = 'block';
	this.container.appendChild(this.canvasElement);

	return this.canvasElement;

};