// Given the root node of a binary tree (but not necessarily a binary search tree,) write three functions
// that will print the tree in pre-order, in-order, and post-order.

function preOrder(node, nodes = []) {
  if (node) {
    nodes.push(node.data);
    preOrder(node.left, nodes);
    preOrder(node.right, nodes);
  }

  return nodes;
}

function inOrder(node, nodes = []) {
  if (node) {
    inOrder(node.left, nodes);
    nodes.push(node.data);
    inOrder(node.right, nodes);
  }

  return nodes;
}

function postOrder(node, nodes = []) {
  if (node) {
    postOrder(node.left, nodes);
    postOrder(node.right, nodes);
    nodes.push(node.data);
  }

  return nodes;
}

function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

let node = new Node('A', new Node('B'), new Node('C'));

preOrder(node); //=> ["A", "B", "C"]
inOrder(node); //=> ["B", "A", "C"]
postOrder(node); //=> ["B", "C", "A"]
