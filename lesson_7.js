// function createCounter(initialValue = 0) {
//     let counter = initialValue;
//
//     function counterFunction() {
//         counter++;
//         return counter;
//     }
//
//     counterFunction.reset = function() {
//         counter = initialValue;
//         return counter;
//     };
//
//     return counterFunction;
// }

// const counter = createCounter(10)
//
// console.log(counter())
// console.log(counter.reset())


// function runWithConcurrencyLimit(functions, limit) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let runningCount = 0;
//         let currentIndex = 0;
//
//         function runNext() {
//             if (currentIndex >= functions.length && runningCount === 0) {
//                 return resolve(results);
//             }
//
//             // Проверка, чтобы не запускать больше функций, чем доступный лимит
//             while (runningCount < limit && currentIndex < functions.length) {
//                 const fnIndex = currentIndex++;  // Получаем текущий индекс и увеличиваем его для следующего вызова
//                 runningCount++;  // Увеличиваем счётчик работающих задач
//
//                 functions[fnIndex]()
//                     .then((result) => {
//                         results[fnIndex] = result;  // Сохраняем результат по правильному индексу
//                     })
//                     .catch((error) => {
//                         reject(error);  // При первой ошибке отклоняем основной промис
//                     })
//                     .finally(() => {
//                         runningCount--;  // Уменьшаем счётчик работающих задач
//                         runNext();       // Запускаем следующую задачу
//                     });
//             }
//         }
//
//         // Запускаем начальные задачи
//         runNext();
//     });
// }


const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 100)),
    () => new Promise(resolve => setTimeout(() => resolve('Error in task 3'), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 200))
]

function runWithConcurrencyLimit(tasks, limit) {
    debugger
    return new Promise(resolve =>  {
        const answer = []
        let count = 0
        function run() {
            while(count < limit && tasks.length !== 0) {
                count++
                const task = tasks.shift()
                task()
                    .then(item => {
                        answer.push(item)
                        console.log(answer)
                        count--
                    })
                    .catch(err => {
                        answer.push(err)
                        console.log(answer)
                        count--
                    })
            }
        }
        resolve(answer)
    })
}

runWithConcurrencyLimit(tasks, 2).then(a => console.log(a))