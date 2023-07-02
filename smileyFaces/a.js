
const smileyFaces = (...args) => {

    const valid = (vc,c) => vc.includes(c) 
    
    return args.filter(face => {
        const faceSplit = face.split('')
        const eyes = faceSplit[0]
        
        if(valid([':',';'], eyes)){
            
            let mouth = faceSplit[1]

            if(face.length > 2){
                const nose = mouth
                valid(['-','~'],nose) && (mouth = faceSplit[2])
                return valid([')','D'], mouth) 
            }

            return valid([')','D'], mouth)

        }

    }).length

}

console.log(smileyFaces(':)', ':D'))