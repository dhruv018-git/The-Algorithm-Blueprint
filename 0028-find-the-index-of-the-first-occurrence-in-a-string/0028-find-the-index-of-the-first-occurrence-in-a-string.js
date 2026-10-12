/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n  = needle.length;
    for (let i = 0; i <= haystack.length-n; i++) {
    if (haystack.slice(i, i + n) === needle) {
        return (i);
        break;
    } 
    }
   
   return -1
};