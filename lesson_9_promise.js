// Каким будет вывод этого фрагмента кода?

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1) // функция коллбэка будет выполнена сразу же
})

console.log('end');