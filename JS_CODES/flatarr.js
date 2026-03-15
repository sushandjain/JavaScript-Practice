let flaat=(arr)=>{
let result=[]
for(let i in arr){
    if(Array.isArray(i)){
        result.push(...flaat(i))
    }else{
        result.push(i)
    }
}
return result

}
console.log(flaat([1,2,[3,4,[5,6]],7,[8,9]]));
