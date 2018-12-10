var points = document.body.innerText.split('\n').filter(x=>x).map(x => x.match(/position=<\s*([-\d]*),\s*([-\d]*)> velocity=<\s*([-\d]*),\s*([-\d]*)>/).slice(1,5).map(y => +y));

function next() {
	points.forEach(point => {
		point[0] += point[2];
		point[1] += point[3];
	});
}

function draw() {
	var xa = points.map(p => p[0]);
	var ya = points.map(p => p[1]);

	var xmin = Math.min.apply(null, xa);
	var xmax = Math.max.apply(null, xa);
	var ymin = Math.min.apply(null, ya);
	var ymax = Math.max.apply(null, ya);

	if (ymax - ymin > 100) return;

	var grid = [];
	points.forEach(p => {
		var x = p[0]-xmin;
		var y = p[1]-ymin;
		if (!grid[y]) grid[y] = new Array(xmax - xmin + 1).fill(' ');
		grid[y][x] = 'x';
	});

	console.log(s);
	console.log(grid.map(row => row.join('')).join('\n'));
	console.log('\n\n');
}

var s = 1;
while (1) {
	if (s > 100000) break;
	next();
	draw();
	s++;
}
