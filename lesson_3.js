// const functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
//
// var promiseAll = function(functions) {
//     return new Promise((resolve, reject) => {
//         let hasRejected = false
//         let date = Date.now()
//         const obj = {}
//
//
//         functions.forEach((fun) => {
//             if (hasRejected) { return }
//             obj.resolved = []
//             fun()
//                 .then(value => {
//                     obj.t = Date.now() - date
//                     obj.resolved.push(value)
//                     resolve(obj)
//                 })
//                 .catch(error => {
//                     hasRejected = true
//                     obj.t = Date.now() - date
//                     delete obj.resolved
//                     obj.rejected = 'Error'
//                     reject(obj)
//                 })
//         })
//     })
// };
//
// promiseAll(functions).then(answer => console.log(answer)).catch(err => console.log(err))

// Есть дерево, в нем 10 вершин. Первая вершина - 1. Найти максимальную сумму по проходу дерева, решение через рекурсию.

const tree = {
    name: 1,
    children: [
        {
            name: 7,
            children: [
                {
                    name: 4,
                    children: []
                },
                {
                    name: 5,
                    children: []
                }
            ]
        },
        {
            name: 4,
            children: [
                {
                    name: 3,
                    children: [
                        {
                            name: 2,
                            children: []
                        }
                    ]
                },
                {
                    name: 2,
                    children: []
                }
            ]
        }
    ]
}

function countTree(tree) {
    sum+= tree.name
    if (tree.children.length) {
        tree.children.forEach(tr => countTree(tr))
        sum -= tree.name
    } else {
        results.push(sum)
        sum -= tree.name
    }
}

function findMaxNumber(array) {
    let max = 0
    array.forEach(num => max = num > max ? num : max)
    return max
}

function findMaxSumInTree() {
    results = []
    sum = 0
    countTree(tree)
    return findMaxNumber(results)
}

console.log(findMaxSumInTree())