/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   let m = accounts.length;
   let n = accounts[0].length;
      let max =0;
    for(let i =0;i<m;i++){
       let current = 0;
  
    for(let j=0;j<n;j++){
        current+=accounts[i][j]
     
      } if(current>max){
        max = current
    }
    }return max
};