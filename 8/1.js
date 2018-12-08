var f = document.body.innerText.split(' ').filter(x => x.length).map(x => +x)
var metadata = 0;

var i = 0;
function read() {
	var children = f[i++];
	var mn = f[i++];

	for (let j = 0; j < children; j++) {
		read();
	}

	for (let j = 0; j < mn; j++) {
		metadata += f[i++];
	}
}

read();
metadata;
