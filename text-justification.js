/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var res = [],
        wl = 0,
        artp = [];
    for (var i = 0; i < words.length;) {
        // console.log(wl + words[i].length + artp.length)
        if (wl + words[i].length + artp.length <= maxWidth) {
            wl += words[i].length;
            artp.push(words[i]);
            if (i === words.length - 1) { //last
                i++
                var a = artp.join(' ');
                res.push(a + slots(maxWidth - a.length))
                    // console.log('last:', artp.join(' ')+slots)
            }
            i++;

        } else {
            // console.log(wl,artp.length,Math.floor(( maxWidth - wl ) / ( artp.length - 1 )))
            var spl = Math.floor((maxWidth - wl) / (artp.length - 1));
            var extra = (maxWidth - wl) % (artp.length - 1);
            var str = '';
            if (artp.length === 1) {
                var spl = maxWidth - artp[0].length;
                var extra = 0;
                str = artp[0]+slots(spl)
            } else {
                artp.forEach(function(e, j) {
                    console.log(e, j)
                    str += e + (j === artp.length - 1 ? '' : (j < extra ? slots(spl + 1) : slots(spl)));
                    console.log(str)
                });
            }
            res.push(str);
            wl = 0;
            artp = [];

        }
    }
    return res;
};

var slots = function(num) {
    return new Array(num).fill(' ').join('');
};

// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)[0].length)
// console.log(fullJustify(["a","b","c","d","e"], 3))
console.log(fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6))