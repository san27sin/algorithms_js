// Задача №10: типичный вопрос с собеседования
// Что выводит этот фрагмент кода?

console.log('start'); // 1

const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2')
    })
}, 0)

console.log('end'); // 2

// start end promise1 timer1 promise2 timer2

