var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort(function(a,b) {return a.start-b.start});
    var result = [];
    var start = intervals[0].start;
    var end = intervals[0].end;
    for (var interval of intervals) {
        if (interval.start <= end)
            end = Math.max(end, interval.end);
        else {
            result.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    }
    result.push(new Interval(start, end));
    return result;
    
    // intervals.sort(function(a,b) {return a.start-b.start});
    // var i = 0;
    // while (i < intervals.length-1) {
    //     if (intervals[i].end >= intervals[i+1].start ) {
    //         if (intervals[i].end < intervals[i+1].end) {
    //             intervals[i].end = intervals[i+1].end;
    //         }
    //         intervals.splice(i+1, 1);
    //     } else 
    //         i ++;
    // }
    // return intervals;
};