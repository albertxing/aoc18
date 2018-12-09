var nplayers = 13;
var nmarbles = 146373;

var scores = [];
var arr = [];

var cplayer = -2;
var current = 0;

for (let i = 0; i <= nmarbles; i++) {
	cplayer = (cplayer + 1) % nplayers;

	if (i > 0 && (i % 23 === 0)) {
		scores[cplayer] = (scores[cplayer] || 0) + i;

		var removedIndex = (arr.length + current - 7) % arr.length;

		// console.log(i, removedIndex, arr[removedIndex], arr.length);

		scores[cplayer] += arr.splice(removedIndex, 1)[0];

		current = removedIndex % arr.length;
	} else {
		var insertIndex = (((current + 1) % arr.length) || 0) + 1;
		arr.splice(insertIndex, 0, i);
		current = insertIndex;
	}

	// console.log(i, arr, current, cplayer, scores);
}

Math.max.apply(null, scores.filter(x => x));
