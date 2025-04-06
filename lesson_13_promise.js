// Каким будет вывод этого фрагмента кода?

console.log('start')

const fn = () => (new Promise((resolve, reject) => { // мы возвращаем ссылку на новую функцию и не выполняем ее
    console.log(1);
    resolve('success')
}))

console.log('middle')

fn().then(res => { // fn() - вызов синхронной функции, а then() - уже асинхронной
    console.log(res)
})

console.log('end')
