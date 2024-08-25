class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // 전체 리스트에는 값이 없지만 저장된 변수에는 남아있기에 이것도 삭제를 해줘야함
    }

    this.length--;
    return poppedNode;
  }
  // 맨 앞 node  제거
  shift() {
    if (!this.head || this.length === 0) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
  // 맨 앞에 node 추가
  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (Math.floor(this.length / 2) >= index) {
      let count = this.length - 1;
      let cur = this.tail;

      while (count !== index) {
        cur = cur.prev;
        count--;
      }
      return cur;
    } else {
      let count = 0;
      let cur = this.head;

      while (count !== index) {
        cur = cur.next;
        count++;
      }
      return cur;
    }
  }
  // 해당 index의 node 변경
  set(index, val) {
    let oldNode = this.get(index);
    if (!oldNode) return false;
    oldNode.val = val;
    return true;
  }
  // 해당 index의 node 추가
  insert(index, val) {
    const beforeNode = this.get(index - 1);
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    if (!beforeNode) return false;

    const newNode = new Node(val);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    const removeNode = this.get(index);
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (!removeNode) return undefined;

    removeNode.prev.next = removeNode.next;
    removeNode.next.prev = removeNode.prev;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
}
