var expect = function(val) {
    return{
        toBe:(obj)=>{
            if(val===obj)return true;
            throw new Error("Not Equal")
        },
        notToBe:(obj)=>{
            if(val!==obj)return true
            throw new  Error("Equal")
        }
    }
    
};