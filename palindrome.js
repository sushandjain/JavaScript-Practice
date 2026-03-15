
/**
 * @param {number} x
 * @return {boolean}
 */
let x=10;
var isPalindrome = function(x) {
    if(x>0){
        let rev=x.toString().split("").reverse().join("")
        console.log(rev);
        
        if(Number(rev)===x){
            return true
        }
        return false
    }else{
        return false
    }
};
console.log(isPalindrome(10));
