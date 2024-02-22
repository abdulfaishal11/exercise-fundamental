function palindrom(palind) {
    console.log(palind);
    let reverse = ""
    for(let i=palind.length-1 ; i>=0 ; i--) {
        reverse += palind[i] 
    }
    console.log(reverse);
    
    if (palind === reverse) {
        return true 
    } else {
        return false
    }
}

    
const isPalindrom = palindrom("121-")
console.log(isPalindrom);

