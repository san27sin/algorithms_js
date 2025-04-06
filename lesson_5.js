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

// правильное решение 15. 3Sum (преподавателя)

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip the same element to avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1; // left pointer
        let k = nums.length - 1; // right pointer

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                // Found a triplet
                result.push([nums[i], nums[j], nums[k]]);

                // Skip duplicates for the second number
                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }

                // Skip duplicates for the third number
                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }

                // Move both pointers after finding a valid triplet
                j++;
                k--;
            } else if (sum < 0) {
                // Sum is less than zero, move the left pointer to the right
                j++;
            } else {
                // Sum is greater than zero, move the right pointer to the left
                k--;
            }
        }
    }

    return result;
}