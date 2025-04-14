// Что выведет код?
const arr = [1, 2, 3]
arr[10] = 99
console.log(arr)

// Добавить метод к числу, чтобы можно было вывести римскую
Number.prototype.toTest = function () {
    return this + 'I'
}

let a = 6
console.log(a.toTest())
