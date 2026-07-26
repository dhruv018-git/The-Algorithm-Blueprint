/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
    remainingSum=s;
    let ans=0;
     if(s>9*n)return -1
     if(s==0) return 0;
     for(let i=0;i<n;i++){
        let currentDig = Math.min(9,remainingSum);
        ans=ans*10+currentDig;
        remainingSum-=currentDig;
       

     }return Number(ans)
    
  
};