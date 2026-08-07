/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let ans =0;
    let current = x;
    while(current>0){
    let digit = current%10;
    ans= ans*10+digit
    current = Math.floor(current/10)}
    if(ans==x){
        return true
    }else {return false}
};