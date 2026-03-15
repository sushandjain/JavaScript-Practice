let str="sushandjain";

const result=str.split("").reduce((acc,ch)=>{
    acc[ch]=( acc[ch] || 0)+1
    return acc
},[])
console.log(result);
