// решается через конкетенацию строк и вычитание чисел
// function largestNumber(nums) {
//     debugger
// 	const str = nums.map(num => num.toString())
// 	str.sort((a, b) => {
// 		const c = b + a
// 		const k = a + b
// 		const l = c - k
// 		return l
// 	})
// 	console.log(str)
// }
//
// largestNumber([3,30,34,5,9])

// сортировка пузырьком bubble sort
// по парной сранвиваем

// слева направо
function bubbleSortLeft(nums) {
    for(let i = 0; i < nums.length - i - 1; i++) {
        for (let b = 1; b < nums.length -i; b++) {
            if (nums[b-1] < nums[b]) {
                const a = nums[b-1]
                nums[b-1] = nums[b]
                nums[b] = a
            }
        }
    }
    return nums
}

// const array = [1, 23, 3, 234, 4, 5]
// console.log(bubbleSortLeft(array))

// справо налево
function bubbleSortRight(nums) {
    for(let i = nums.length - 1; i >= 1; i--) {
        for (let b = nums.length - 2; b >= 0; b--) {
            if (nums[b+1] > nums[b]) {
                const a = nums[b+1]
                nums[b+1] = nums[b]
                nums[b] = a
            }
        }
    }
    return nums
}

const array_2 = [4, 1, 5, 12, 6, 9]
console.log(bubbleSortRight(array_2))

// дз подумать над разными решениями с одного конца и другого