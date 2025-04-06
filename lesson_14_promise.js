// Каким будет вывод этого фрагмента кода?

console.log('start')

Promise
    .resolve(1) // Promise.resolve - вернет объект Promise это синхронный код, состояние (fulfilled)
    .then((res) => { // это асинхронный код
        console.log(res)
    })

Promise
    .resolve(2)
    .then((res) => {
        console.log(res)
    })

console.log('end')