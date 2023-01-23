/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let total = 0

    let key = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let i = 0
    while(i<s.length){
        if(s[i] === "I"){
            if(s[i+1] === "V"){
                total+= 4
                console.log(i,total)
                i+=2
            }
            if(s[i+1] === "X"){
                total+= 9
                i+=2
            }
            else if(s[i+1] !== undefined && s[i+1] !== "V" && s[i+1] !== "X"){
                console.log(s[i+1])
                total+=key[s[i]]
                i++
            }
        }
        else if(s[i] === "X"){
            if(s[i+1] === "L"){
                total+= 40
                i+=2
            }
            if(s[i+1] === "C"){
                total+= 90
                i+=2
            }
            else if(s[i+1] !== undefined && s[i+1] !== "L" && s[i+1] !== "C"){
                total+=key[s[i]]
                i++
            }
        }
        else if(s[i] === "C"){
            if(s[i+1] === "D"){
                total+= 400
                i+=2
            }
            if(s[i+1] === "M"){
                total+= 900
                i+=2
            }
            else if(s[i+1] !== undefined && s[i+1] !== "D" && s[i+1] !== "M"){
                total+=key[s[i]]
                i++
            }
        }
        if(i>=s.length){
            console.log(64,i, total)
            break
        }
        else if(s[i] === "V" || s[i] === "L" || s[i] === "D" || s[i] === "M"){
            total+=key[s[i]]
            i++
        }
    console.log("i:",i,"total",total)
    }
    console.log("i:",i,"total",total)
    return total
};


console.log(romanToInt("MCMXCIV"))

