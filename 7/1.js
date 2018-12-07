var f = document.body.innerText.split('\n').filter(x => x.length)
var s = f.map(x => x.match(/Step (.) must be finished before step (.) can begin./).slice(1,3))
var n = new Set();
s.forEach(x => {
	n.add(x[0])
	n.add(x[1])
});

var t = '';
while (n.size) {
	var todo = [];
	n.forEach(q => {
		if (s.filter(x => x[1] === q).length === 0) {
			todo.push(q);
		}
	})

	todo.sort();
	var qq = todo[0];

	t += qq;
	n.delete(qq);
	s = s.filter(x => x[0] !== qq);
}

console.log(t);