/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let max = 0;
     let i = 0;
     let j = n-1;
     while(i<j){
        let w = j-i
        let h  = Math.min(height[i],height[j])
        let area = w*h
        max = Math.max(max,area)

        if(height[i]<height[j]){
            i++
            }else{
             j--
            } 

        
     }
    
   return max
};   