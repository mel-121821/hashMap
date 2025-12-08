// Linked list

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Methods
  printError_ListEmpty() {
    console.log("This list is empty!");
  }

  append(key, value) {
    if (this.head == null) {
      this.head = new Node(key, value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(key, value);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let sum = 0;
    if (this.head == null) {
      // do nothing
    } else {
      let tmp = this.head;
      while (tmp != null) {
        tmp = tmp.nextNode;
        sum++;
      }
    }
    return sum;
  }

  header() {
    if (this.head != null) {
      return this.head;
    } else {
      this.printError_ListEmpty();
    }
  }

  tail() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    }
  }

  at(index) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let counter = 0;
      let tmp = this.head;
      while (counter < index) {
        tmp = tmp.nextNode;
        counter++;
      }
      return tmp;
    }
  }

  pop() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let prev = null;
      let current = this.head;
      while (current.nextNode != null) {
        prev = current;
        current = current.nextNode;
      }
      console.log(`Removed ${current.value}`);
      prev.nextNode = null;
    }
  }

  containsKey(key) {
    if (this.head == null) {
      // this.printError_ListEmpty();
      return false;
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.key != key) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        // console.log(`${key} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.key}`);
        return true;
      }
    }
  }

  find(key) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.key != key) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        console.log(`${key} was not found`);
        return null;
      } else {
        return tmp.value;
      }
    }
  }

  changeAtKey(key, value) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.key != key) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        console.log(`${key} was not found`);
        return false;
      } else {
        console.log(tmp);
        tmp.value = value;
        console.log(tmp);
      }
    }
  }

  toString() {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      let string = "";
      while (tmp != null) {
        string += `(${tmp.value}) -> `;
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        string += "null";
      }
      return string;
    }
  }

  insertAt(value, index) {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let counter = 0;
      let prev = null;
      let current = this.head;
      while (current != null && counter < index) {
        prev = current;
        current = current.nextNode;
        counter++;
      }
      if (current == null) {
        console.log(
          `Linked list is shorter than ${index}, so ${value} was placed at the end of the list instead`
        );
        prev.nextNode = new Node(value);
      } else {
        console.log(`${value} was inserted at ${counter}`);
        prev.nextNode = new Node(value, current);
      }
    }
  }

  removeKey(key) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let prev = null;
      let current = this.head;
      while (current != null && current.key != key) {
        prev = current;
        current = current.nextNode;
      }
      if (current == null) {
        console.log(`There is no key called: ${key}, so nothing was removed`);
        return false;
      } else {
        console.log(`Removed ${current.key}.`);
        if (prev == null) {
          this.head = current.nextNode;
        } else {
          prev.nextNode = current.nextNode;
        }
        return true;
      }
    }
  }
}

class Node {
  constructor(key, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

export { LinkedList };
