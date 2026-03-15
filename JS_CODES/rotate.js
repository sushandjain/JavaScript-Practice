function rotate(arr,rotate){
    let result=[]
    for(let i=rotate;i<arr.length;i++){
        let num=arr[i]
        result.push(num)
    }
    for(let i=0;i<rotate;i++){
        let num=arr[i]
        result.push(num);
    }
    return result
}
console.log(rotate([10,20,30,40,50,60,70],3));
