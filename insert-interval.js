/**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].


 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
function Interval(start, end) {
	this.start = start;
	this.end = end;
}


var insert = function(intervals, newInterval) {
	var startFlag = newInterval.start,
		endFlag = newInterval.end,
		res = [];
	intervals.forEach(function(e){
		if(e.start > newInterval.end || e.end < newInterval.start){
			res.push(e)
		}else{
			startFlag = Math.min(startFlag,e.start,newInterval.start);
			endFlag = Math.max(endFlag,e.end,newInterval.end);
		}

	})
	res.push(new Interval(startFlag,endFlag));
	res.sort(function(a,b){return a.start - b.start})
	return res;

};

console.log(insert(
	[
		new Interval(1, 5),
		// new Interval(6, 9),
	],
	new Interval(0, 0)
))