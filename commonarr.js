function common(a, b, c) { 
    let result = []; 
 
    for (let i = 0; i < a.length; i++) { 
        let foundInB = false; 
        for (let j = 0; j < b.length; j++) { 
            if (a[i] === b[j]) { 
                foundInB = true; 
                break; 
            } 
        } 
        if (foundInB) {
        let foundInC = false; 
        for (let k = 0; k < c.length; k++) { 
            if (a[i] === c[k]) { 
                foundInC = true; 
                break; 
            } 
        } 
        if (foundInC) result[result.length] = a[i]; 
        
    } 
}
    return result; 
} 
console.log(common([1,2,3], [2,3,4], [3,2,5]));