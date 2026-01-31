
let res=[]
for (let i=0;i<3;i++){
    let n=parseInt(prompt(`enter the ${i+1} number`))
    res.push(n)
}

let[a,b,c]=res
console.log(a,b,c);

if(a>b){
    if(a>c){
        console.log(`${a} is grater number`);
    }
    else{
        console.log(`${c} is grater number`);   
    }
}else if(b>c){
        console.log(b+'is grater number');
        
    }else{
        console.log(c+'is grater number');
        
    }
