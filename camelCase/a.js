
const string = 'camelCase'
const camelCase = (string) => {
    return [...string].map(c => {
        
        if(c === c.toUpperCase()) return ` ${c}`
        return c

    }).join('')
}

console.log(camelCase(string))