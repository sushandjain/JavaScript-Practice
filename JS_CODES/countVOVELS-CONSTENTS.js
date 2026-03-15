function countvov(str){
    let vowels=0;
    let constent=0;

    for(let i=0;i<str.length;i++){
        let ch=str[i];

        if((ch>='A'&&ch<='z') ||(ch>='a'&&ch<='z')){
        if(ch==='A'||ch==='E'||ch==='I'||ch==='O'||ch==='U'||ch==='a'||ch==='e'||ch==='i'||ch==='o'||ch==='u'){
            vowels++
        }else{
            constent++
        }
    }

    }
    return {vowels,constent}
}
console.log(countvov("sushan d jain"));
