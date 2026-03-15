let arr=[1,1,2,3,4,4,6];

let res=[]

for(let i=0;i<arr.length;i++){
    if(res!==arr[i]){
        res.push(arr[i])
    }
}

console.log(res);
