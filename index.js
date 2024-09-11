import createLinkedList from './createLinkedList.js';

const list = createLinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');

console.log(list.toString());
