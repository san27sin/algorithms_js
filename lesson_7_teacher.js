// const tasks = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(2), 100)),
//     () => new Promise((_, reject) => setTimeout(() => reject('Error in task 3'), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(4), 200))
// ];
//
// function runWithConcurrencyLimit(tasks, limit) {
//     return new Promise(resolve => {
//         const answer = [];
//         let count = 0;
//         let index = 0;
//
//         function runTask() {
//             if (index >= tasks.length && count === 0) {
//                 resolve(answer);
//                 return;
//             }
//
//             while (count < limit && index < tasks.length) {
//                 const task = tasks[index];
//                 index++;
//                 count++;
//
//                 task()
//                     .then(item => {
//                         answer.push(item);
//                         count--;
//                         runTask();
//                     })
//                     .catch(err => {
//                         answer.push(err);
//                         count--;
//                         runTask();
//                     });
//             }
//         }
//
//         runTask();
//     });
// }
//
// runWithConcurrencyLimit(tasks, 2).then(answer => console.log(answer));