function flatten(obj,parent="",result={}) {
    for(let key in obj){
        Newkey= parent===""?key:parent+"."+key;

        if(typeof(obj[key])==="object" && !Array.isArray(obj[key]) ){
            flatten(obj[key],Newkey,result);
        }else{
            result[Newkey]=obj[key];
        }
    }
    return result

}
console.log(flatten({  a: { b: { c: 10 }, d: 20 },  e: 30 })
);
