
const stringSplit = (str) => {

    if (str.length % 2 !== 0) {
        str += '_'
    }

    let vc = []

    for(let i = 0; i < str.length; i++){
        if(i % 2 !== 0){
            vc = [...vc, `${str[i - 1]}${str[i]}`]
        }
    }
    
    return vc
}

console.log(stringSplit('abcde'))