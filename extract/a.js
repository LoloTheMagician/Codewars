
const extract = (a,b) => {
    return a.filter(n => {
        return !b.includes(n)
    })
}

console.log(extract([1,2], [2]))