/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    let l = 0;
    let r = height.length-1;
    lmax = 0; 
    rmax = 0;
    while(l<r){
     lmax = Math.max(height[l],lmax);
     rmax = Math.max(height[r],rmax);
     if(lmax<rmax){
       ans+= (lmax-height[l]); 
       l++
     }else {
        ans+= (rmax-height[r])
        r--
     }
    }
   return ans;
  
};