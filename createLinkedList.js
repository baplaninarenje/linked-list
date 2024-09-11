import createNode from './createNode.js';

export default function createLinkedList() {
  let head = null;

  const append = (value) => {
    if (head == null) prepend(value);
    else {
      let tmp = head;
      while (tmp.next != null) tmp = tmp.next;

      tmp.next = createNode(value);
    }
  };

  const prepend = (value) => {
    if (head == null) head = createNode(value);
    else {
      let tmp = head;
      head = createNode(value);
      head.next = tmp;
    }
  };

  const size = () => {
    let tmp = head;

    let totalNumberOfNodes = 0;

    while (tmp != null) {
      totalNumberOfNodes = totalNumberOfNodes + 1;
      tmp = tmp.next;
    }

    return totalNumberOfNodes;
  };

  const headNode = () => {
    return head;
  };

  const tail = () => {
    let tmp = head;

    let tail = null;

    while (tmp != null) {
      if (!tmp.next) tail = tmp;
      tmp = tmp.next;
    }

    return tail;
  };

  const at = (index) => {
    isIndexNumberValid(index);
    let tmp = head;

    let tmpIndex = 0;

    while (tmp != null) {
      if (tmpIndex === index) return tmp;
      tmpIndex = tmpIndex + 1;
      tmp = tmp.next;
    }
  };

  const pop = () => {
    const tailIndex = find(tail().value);
    if (tailIndex) at(tailIndex - 1).next = null;
    else head = null;
  };

  const contains = (value) => {
    const nodeIndex = find(value);
    if (nodeIndex || nodeIndex === 0) return true;
    else return false;
  };

  const find = (value) => {
    let tmp = head;
    let tmpIndex = 0;
    let outputIndex = null;

    while (tmp != null) {
      if (tmp.value === value) outputIndex = tmpIndex;
      tmpIndex = tmpIndex + 1;
      tmp = tmp.next;
    }

    return outputIndex;
  };

  const toString = () => {
    let tmp = head;

    let outputString = '';

    while (tmp != null) {
      outputString = outputString + `( ${tmp.value} ) -> `;
      tmp = tmp.next;
    }

    return outputString + 'null';
  };

  const insertAt = (value, index) => {
    isIndexNumberValid(index);
    const nextNode = at(index);
    const previousNode = index ? at(index - 1) : null;
    const newNode = createNode(value, nextNode);
    if (previousNode) previousNode.next = newNode;
    else head = newNode;
  };

  const removeAt = (index) => {
    isIndexNumberValid(index);
    const nodeToBeRemoved = at(index);
    // nodeToBeRemoved = null;
    const previousNode = index ? at(index - 1) : null;
    const nextNode = index + 1 >= size() ? null : at(index + 1);
    if (previousNode) previousNode.next = nextNode;
    else head = nextNode;
  };

  const isIndexNumberValid = (index) => {
    const indexSize = size() - 1;
    if (typeof index !== 'number') {
      throw new Error(
        `Provided input [${index}: ${typeof index}] is not a number.`
      );
    } else if (index < 0 || index > indexSize) {
      throw new Error(
        `Illegal index [${index}]: Valid index range is [0-${indexSize}]`
      );
    } else return true;
  };

  return {
    append,
    prepend,
    size,
    headNode,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
