/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {

        // non-alphanumeric character ko skip karo
        while (i < j && !/[a-zA-Z0-9]/.test(s[i])) {
            i++;
        }

        while (i < j && !/[a-zA-Z0-9]/.test(s[j])) {
            j--;
        }

        // lowercase karke compare karo
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};