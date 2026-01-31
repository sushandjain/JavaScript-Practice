let n=5;

for(let i=1;i<=n;i++){
    let res=""
    for(let s=1;s<=n-i;s++){
        res+=" ";
    }
    for(let j=1;j<=i;j++){
        res+=j
    }
    for(let j=i-1;j>=1;j--){
        res+=j
    }
    console.log(res);
    
}