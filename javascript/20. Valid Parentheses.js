/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let key = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    let queue = []
    for(let i=0;i<s.length;i++){
        if(s[i]==="("||s[i]==="{"||s[i]==="["){
            queue.push(s[i])   
        }
        if(s[i]===")"||s[i]==="}"||s[i]==="]"){
            if(queue[queue.length-1]!==key[s[i]]){
                return false
            }else if(queue[queue.length-1]===key[s[i]]){
                queue.pop()
            }
        }
    }
    
    return queue.length === 0 ? true : false
};

// '{([])}' = true
// open a parentheses, close them in lifo

// '{}()' = true

