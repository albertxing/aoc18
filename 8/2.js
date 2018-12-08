var f = document.body.innerText.split(' ').filter(x => x.length).map(x => +x)
var metadata = 0;

var i = 0;
function read() {
	var children = f[i++];
	var mn = f[i++];

	var cvalues = [];
	for (let j = 0; j < children; j++) {
		cvalues.push(read());
	}

	var value = 0;

	if (children === 0) {
		for (let j = 0; j < mn; j++) {
			value += f[i++];
		}
	} else {
		for (let j = 0; j < mn; j++) {
			value += cvalues[f[i++] - 1] || 0;
		}
	}

	return value;
}

read();
