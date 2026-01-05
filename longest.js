let sen="my name is sushan d jain a developper";

function long(sen){
    let longest=""
    let current=""
    for(let i=0;i<sen.length;i++){
        ch=sen[i];
        if(ch!=" "){
            current=current+ch;
        }else{
            if(current.length>longest.length){
                longest=current;
            }
            current="";
        }
    }
    if(current.length>longest.length){
                longest=current;
            }
            return longest

}

console.log(long(sen));
