const extract = (a,b) => {
    
    const arr = []

    for(const numb of a){
        !b.includes(numb) && arr.push(numb)    
    }

    return arr

}

console.log(extract([1,2], [2]))