function longestIncreasing(arr) { 
    let longest = []; 
    let current = []; 
 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > arr[i - 1]) { 
            current.push(arr[i]); 
        } else { 
            if (current.length > longest.length) longest = current; 
            current = [arr[i]]; 
        } 
    } 
    if (current.length > longest.length) longest = current; 
    return longest; 
} 
console.log(longestIncreasing([0, 2, 3, 3, 4,5, 1])); 