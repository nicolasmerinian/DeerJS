debugger;
var game = Deer.Game('container', 349, 600);

/*game.add('stage', {
	name: 'level1',
	background: {
		url: 'graphics/backgrounds/myBG.png',
		scrolling: true,
		speed: { x: 0, y: 5 }
	},
	music: 'musics/myMusic.mp3',
	enemies: {
		enemies: [
			{
				name: 'enemy1',
				url: 'graphics/enemies/enemy1.png',
				power: 1,
				weapon: null,
				life: 2,
				spawnAt: {
					x: deer.Position.Random,
					y: deer.Position.Up.Outside
				},
				path: deer.Path.Bottom.Straight,
				animation: {
					destroy: {
						url: 'graphics/animations/littleExplosion.png',
						frames: 15,
						time: 300,
						sound: 'sounds/boum.mp3'
					}
				},
			},
			{
				name: 'boss1',
				url: 'graphics/enemies/boss1.png',
				type: deer.Enemy.Boss, // necessary?
				power: 1,
				weapon: {
					name: 'laser',
					sprite: 'graphics/bullets/laser2.png',
					power: 2,
					multihit: false,
					path: deer.Path.Bottom.Straight,
					sound: 'sounds/fire.mp3',
					animation: {
						destroy: {
							url: 'graphics/animations/littleExplosion.png',
							frames: 15,
							time: 2700,
							sound: 'sounds/boum.mp3'
						}
					},
					transform: function() {
						this.width *= 1.05;
					},
				},
				life: 200,
				spawnAt: {
					x: deer.Position.Middle,
					y: 50
				},
				path: deer.Path.Bottom.Straight,
				animation: {
					destroy: {
						url: 'graphics/animations/littleExplosion.png',
						frames: 15,
						time: 300,
						sound: 'sounds/boum.mp3'
					}
				},
			}
		],
		waves: [ [ 0, 0, 0, 0, 0 ] ],
		timeBetweenWave: 2000,
		timeBetweenEnemy: 1000
	}
});

game.add('ship', {
	name: 'myShip',
	url: 'graphics/ships/ship.png',
	input: deer.Input.Keyboard, // mouse or keyboard
	speed: 6, // if input = keyboard
	life: 5,
	rate: 3,
	weapon: {
		name: 'laser',
		sprite: 'graphics/bullets/laser1.png',
		power: 3,
		multihit: false,
		path: deer.Path.Up.Straight,
		price: 20,
		sound: 'sounds/fire.mp3',
		animation: {
			destroy: {
				url: 'graphics/animations/littleExplosion.png',
				frames: 15,
				time: 300,
				sound: 'sounds/boum.mp3'
			}
		},
		transform: function() {
			this.width *= 1.05;
		},
	}
});

game.add('titlemenu', {
	name: 'titlemenu',
	background: {
		url: 'backgrounds/titleMenu.png'
	},
	music: 'musics/menu.mp3',
	choices: {
		url: ['pictures/newGame.png', 'pictures/settings.png'],
		actions: [function() {}, function() {}] // something like this
	}
});

game.run('level1');*/