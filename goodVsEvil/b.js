function goodVsEvil(good, evil) {
    
    const goodVal = [1,2,3,3,4,10]
    const evilVal = [1,2,2,2,3,5,10]
    
    let res = 0

    for(const i in evilVal) res += (goodVal[i] * good.split(' ')[i] || 0) - evilVal[i] * evil.split(' ')[i]
    
    return res > 0 
        ? "Battle Result: Good triumphs over Evil"
        : res < 0 
            ? "Battle Result: Evil eradicates all trace of Good"
            : "Battle Result: No victor on this battle field"

}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))