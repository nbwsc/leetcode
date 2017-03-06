/**
Implement int sqrt(int x).

Compute and return the square root of x.

 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for(var i = 0 ; i <= x ; i ++){
        if(i*i === x){
            return i;
        }else if(i*i >x){
            return i-1;
        }
    }
};
