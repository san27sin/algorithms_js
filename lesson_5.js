// h/w - с отрицательными числами дерево, найти кратчайший путь

function threeSum_1 (array) {
    // array.sort((a, b) => a - b) 1) зачем сортировка?
    const answer = []
    for (let a = 1; a < array.length - 2; a++)  {
        const l = array[a-1] // 2) всегда статичный последний элемент length - 1
        const m = array[a]
        const r = array[a+1]
        const isNull = (l + m + r) === 0
        const b = l !== m && l !== r && m !== r
        isNull && b ? answer.push([l,m,r]) : undefined
    }
    return answer
}

function threeSum_2 (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const isNull = nums[i] + nums[j] + nums[k] === 0
                if (
                    isNull
                    && i !== j
                    && i !== k
                    && j !== k
                ) {
                    const array = [nums[i], nums[j], nums[k]]
                    checkArray(result, array) ? result.push(array) : undefined
                }
            }
        }
    }
    return result;
}

function checkArray(arrayOfarray, array) {
    let result = true
    arrayOfarray.forEach(ar => {
        const set = new Set(ar)
        let count = 0
        array.forEach(el => {
            set.has(el) ? count++ : undefined
        })
        if (count === array.length) {
            return result = false
        }
    })
    return result
}

console.log(threeSum_2([-1,0,1,2,-1,-4]))