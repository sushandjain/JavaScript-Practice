let n=5;
for(let i=1;i<=n;i++){
    let res="";
    for(let j=1;j<=n;j++){
        if(i==1 || i==n || j==1 || j==n){
            res+=j
        }else{
            res+=" "
        }
        
    }
    console.log(res);
    
}