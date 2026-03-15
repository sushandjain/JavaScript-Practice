let arr1=["sushan",1,"krishna",2]
let arr2=["scott",1,"tiger",2]

let merge=[]

for(let i=0;i<arr1.length;i++){
    merge[merge.length]=arr1[i]
}
for(let i=0;i<arr2.length;i++){
    merge[merge.length]=arr2[i]
}

console.log(merge);
