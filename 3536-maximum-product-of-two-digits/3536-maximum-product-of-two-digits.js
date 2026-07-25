/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let a = 0, b = 0;
    while (n > 0) {
        const x = n % 10;
        if (a < x) {
            b = a;
            a = x;
        } else if (b < x) {
            b = x;
        }
        n = Math.floor(n / 10);
    }
    return a * b;
};