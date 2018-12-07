var f = document.body.innerText.split('\n').filter(x => x.length)
var s = f.map(x => x.match(/Step (.) must be finished before step (.) can begin./).slice(1,3))
var n = new Set();
s.forEach(x => {
	n.add(x[0])
	n.add(x[1])
});
var nsize = n.size;

var t = -1;
var l = [0,0,0,0,0];
var j = [];

var d = new Set();

while (d.size < nsize) {
	t++;

	l.forEach((tl, tli) => {
		l[tli] = Math.max(0, tl - 1);
		if (l[tli] === 0 && j[tli]) {
			s = s.filter(x => x[0] !== j[tli]);
			d.add(j[tli]);
			j[tli] = null;
		}
	});

	var todo = [];
	n.forEach(q => {
		if (s.filter(x => x[1] === q).length === 0) {
			todo.push(q);
		}
	});

	if (todo.length) {
		todo.sort();
		l.forEach((ll, lli) => {
			if (ll === 0 && todo[0]) {
				var qq = todo[0];
				l[lli] = qq.charCodeAt(0) - 4;
				j[lli] = qq;
				todo = todo.slice(1);
				n.delete(qq);
				console.log(t, lli + 1, 'got assigned', qq, n)
			}
		});
	}
}

console.log(t);