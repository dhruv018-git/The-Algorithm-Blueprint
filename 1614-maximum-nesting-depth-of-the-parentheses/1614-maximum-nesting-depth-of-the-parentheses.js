/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   let depth = 0;
   let maxDepth = 0;

for (let i =0;i<s.length-1;i++) {

    if (s[i]=="(" ) {
        // opening bracket
        depth++
        maxDepth = Math.max(maxDepth, depth);
    }

    if (s[i]==")") {
        // closing bracket
        depth--
    }
}

return maxDepth; 
};