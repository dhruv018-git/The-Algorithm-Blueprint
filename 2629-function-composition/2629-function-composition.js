/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  
    return function(x) {
          current = x;
          for(let i=functions.length-1;i>=0;i--){
            current = functions[i](current);
           

          }
         return current
    }
    
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */