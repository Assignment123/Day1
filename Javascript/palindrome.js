function checkPalindrome(pal){
    var isPalindrom= pal.split("").reverse().join("");

    if(isPalindrom == pal){
        return true;
    }
    else
    return false;
}
var findValue = checkPalindrome("coke");
console.log(findValue);