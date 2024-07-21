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
  // 원하는 위치에 노드 추가
  insert(index, val) {
    if (this.length < index || index < 0) return false;
    if (this.length === 0 && index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const foundNode = this.get(index - 1);
    const temp = foundNode.next;

    foundNode.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }
  // 원하는 위치에 해당하는 노드 삭제
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0 && this.length === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removed = prevNode.next.next;
    prevNode.next = removed;
    this.length--;

    return removed;
  }
  // 노드를 역순으로 변경
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null; // tail의 next 값은 null이라서

    // 위츠를 서로 바꾼다는 느낌보다는
    // next 노드를 앞으로 가져오고 이전 노드를 next로 연결한다는 느낌으로 생각하면 좋을듯
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
  // 역순이 잘 되었는지 확인용
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push("hi");
list.push("goodbye");
list.push("~!~!");
list.push("cool");

console.log(list.reverse());
