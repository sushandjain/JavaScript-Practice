function grooup(obj,types){
    let result={}
    for(let i=0;i<obj.length;i++){
        let value=obj[i][types]
        if(!result[value]){
            result[value]=[]
        }result[value].push(obj[i]);
    }
    return result;
}


console.log(grooup([ 
    {name:"A", category:"fruit"}, 
    {name:"B", category:"veg"}, 
    {name:"C", category:"fruit"} 
], "category"));