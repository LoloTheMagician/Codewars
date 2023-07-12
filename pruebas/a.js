const string = 'Hola Mundo'

//Reverse Word
const changeWord = (text) => {

    let newString = ''

    for(let i = text.length; i > 0; i--){
        newString += text[i - 1]
    }

    return newString

}

console.log(changeWord(string))

//Change text order

const text = 'Hola, Buenos Días.'

const changeOrder = (text) => {

    let newString = ''

    for(let i = 0; i < text.length; i++){
        
        newString[text.length - i] =  text[i]

    }

    return newString
    
}

console.log(changeOrder(text))
