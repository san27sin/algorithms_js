// Каким будет вывод этого фрагмента кода?

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2) // метод resolve не прерывает выполнение функции
    console.log(3)
})

promise1.then(res => {
    console.log(res)
})

console.log('end');