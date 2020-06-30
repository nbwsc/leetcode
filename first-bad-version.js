/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        /* Time Limit Exceeded*/
        // for(var i = 1 ; i <=n;i++){
        //     if(isBadVersion(i)){
        //         return i;
        //     }
        // }

        /*dichotomy*/
        var head = 1,
            tail = n,
            mid = Math.floor((head + tail)/2);
        while (head < tail-1) {
            if (isBadVersion(mid)) { //search left
                tail = mid;
                mid = Math.floor((head + tail)/2);
            }else{//right
                head = mid;
                mid = Math.floor((head + tail)/2);
            }
        }
        return isBadVersion(mid)?mid:tail
    };
};

console.log(solution((i) => {
    return i >= 2;
})(3))