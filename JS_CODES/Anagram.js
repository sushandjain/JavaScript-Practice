function anagram(str1,str2) {

    if(str1.length!==str2.length){
        return false
    }
    let count={}
    for(let i=0;i<str1.length;i++){
        let char=str1[i]
        count[char]=(count[char] ||0)+1;
    }
    for(let j=0;j<str2.length;j++){
        let char=str2[j]
        if(!count[char]){
            return false
        }
        count[char]--;
    }
    return true
}
console.log(anagram("losten","lonsus"));
