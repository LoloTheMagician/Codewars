function goodVsEvil(good, evil) {
    
    const goodVal = [1,2,3,3,4,10]
    const evilVal = [1,2,2,2,3,5,10]
    
    for(let i = 0; i < evilVal.length; i++){
        goodVal[i] *= good.split(' ')[i]
        evilVal[i] *= evil.split(' ')[i]
    }

    const res = goodVal.filter(n => !isNaN(n)).reduce((a,b) => a + b, 0) - evilVal.reduce((a,b) => a + b,0)

    return res > 0 
        ? "Battle Result: Good triumphs over Evil"
        : res < 0 
            ? "Battle Result: Evil eradicates all trace of Good"
            : "Battle Result: No victor on this battle field"
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))