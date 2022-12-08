/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {


    if (n === 1) return 1
    if (n === 2) return 2
    
    let answer = [1,2]
    
    for(let i=0;i<n; i++){
        
        // console.log(answer[n])
        // console.log(answer[n+1])
        answer.push(answer[i] + answer[i+1])
    }

    console.log(answer)

    return answer[n-1]

    
    
};



// [1,2,3,5,8] 


