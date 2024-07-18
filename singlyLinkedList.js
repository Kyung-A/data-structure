class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // 시작점
    this.tail = null; // 마지막 노드
    this.length = 0;
  }
  // 마지막에 노드 추가
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // 마지막 노드 삭제
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  // 맨 앞 노드 삭제
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // 맨앞에 노드 추가
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  // 원하는 위치에 있는 노드를 추출
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;

    // index가 0 이상일때부터 반복문 실행
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  // 원하는 위치에 있는 노드를 수정
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
}

const list = new SinglyLinkedList();

list.push("hi");
list.push("goodbye");
list.push("~!~!");

console.log(list.set(5, "lala"));
console.log(list);
