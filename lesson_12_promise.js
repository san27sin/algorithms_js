// Каким будет вывод этого фрагмента кода?

console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1) // resolve функция не вызывается, поэтому находится всегда в состоянии pending
})

promise1.then(res => {
    console.log(2) // выполниться или нет?
})

console.log('end');

// как сделать чтобы появилась 2 ?