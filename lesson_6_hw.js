class TreeNode {
    constructor(value) {
        this.value = value
        this.left = undefined
        this.right = undefined
    }

    add(value) {
        if (value < this.value) {
            this.addLeft(value)
        } else {
            this.addRight(value)
        }
    }

    addLeft(value) {
        if (this.left) {
            return this.left.add(value)
        }
        this.left = new TreeNode(value)
    }

    addRight(value) {
        if (this.right) {
            return this.right.add(value)
        }
        this.right = new TreeNode(value)
    }
}

class BinaryTree {
    constructor() {
        this.root = undefined
    }

    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)
        }

        if (value < this.root.value) {

        }
    }
}