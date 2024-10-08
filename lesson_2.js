// 2637. Promise Time Limit

// type Fn = (...params: any[]) => Promise<any>; // изучить
//
// function timeLimit(fn: Fn, t: number): Fn {
//     return async function(...args) {
//         const result = fn(...args)
//         const timer = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Time Limit Exceeded')
//             }, t)
//         })
//         return Promise.race([result, timer]) // 2 промиса запускает одновременно
//     }
// };

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// задача
// найти все пары которые в сумме дадут число k
// [-2,3,4,8,9,2] k=6
// set 0(1)

// function getArray(array, k) {
//     const mySet = new Set()
//     const result = []
//     array.forEach(item => {
//         const r = k - item
//         if (mySet.has(r)) {
//             return result.push([r, item])
//         } else {
//             mySet.add(item)
//         }
//     })
//     return result
// }
//
// console.log(getArray([-2,3,4,8,9,2], 6))

// графы, деревья, мап, сет, стэк
// посмотреть видео собес yandex
// promise

// Домашняя работа

