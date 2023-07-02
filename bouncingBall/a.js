const bouncingBall = (h,b,w) => {

    if((h > w > 0)  && (1 > b && b > 0)){
        
        let mult = h 
        let c = 0

        while(mult > w){

            c === 0 ? c += 1 : c+= 2

            mult *= b

        }

        return c
    }

    return -1

}

console.log(bouncingBall(30, 0.66, 1.5))