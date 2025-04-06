// деревья
// 1) в глубину
// 2) в ширину

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] },
                { value: 7, children: [] }
            ]
        }
    ]
};

// dfs
// в глубину когда не важно кто соседи
function dfs(tree) {
    console.log(tree.value)
    tree.children.forEach(child => {
        dfs(child)
    })
}

// bfs
function bfs(tree) {
    const node = [tree]
    while (node.length > 0) {
        const child = node.shift()
        console.log(child.value)
        child.children.forEach(child => node.push(child))
    }
}

// dfs(tree)
// bfs(tree)

// 94. Binary Tree Inorder Traversal
// 1) построить дерево
// 2) найти решение

var buildTree = function(array) {
    const tree = { value: array[0], left: null, right: null }
    for (let a = 1; a < array.length; a++) {
        if (a % 2 === 1) {
            createBranch()
        } else {

        }
    }
}

var createBranch = function(tree, value) {
    tree = { value, left: null, right: null }
}

var inorderTraversal = function(root) {
    const results = []
    recursion(root, results)
    return results
};

function recursion(tree, results) {
    if (tree === null) {
        return
    }

    recursion(tree.left, results)
    results.push(tree.value)
    recursion(tree.right, results)
}

console.log(inorderTraversal([1,null,2,3]))