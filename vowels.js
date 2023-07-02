
const getVowels = (str) => {
    
    return str.split('').filter(c => {
        
        return ['a','e','i','o','u'].includes(c)
    
    }).length

}


const string = 'abracadabra'
console.log(getVowels(string))