





sort the array and add it up (total)
create another variable (total2)

starting from the end of the array, remove that amount from the total, and add to total2 until total2 is greater than total 1




function test (s){


    let keys = []
    let bars = 0
    let total = 0
    for (let i = 0; i < s.length; i++){

        if (s[i] === '|'){ // if we find a |
            keys.push(i) // store the index of the last seen |
            
        // if (bars % 2 === 0){ // and there are an even number (meaning this one has an opener)
        //     total+= keys[1] - keys[0] - 1
        //     keys = []
        // }
        }
    }
    // return keys

    for (let i=keys.length-1; i>0; i-=1){
        total += keys[i] - keys[i-1] -1
        
    }
    return total
}

