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
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let sum = 0;
      let tmp = this.head;
      while (tmp != null) {
        tmp = tmp.nextNode;
        sum++;
      }
      return sum;
    }
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

  contains(value) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.value != value) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        console.log(`${value} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.value}`);
        return true;
      }
    }
  }

  find(value) {
    if (this.head == null) {
      this.printError_ListEmpty();
    } else {
      let index = 0;
      let tmp = this.head;
      while (tmp != null && tmp.value != value) {
        tmp = tmp.nextNode;
        index++;
      }
      if (tmp == null) {
        console.log(`${value} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.value} at index: ${index}`);
        return index;
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

  removeAt(index) {
    if (this.head == null) {
      this.printError_ListEmpty();
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
          `There is no value at index: ${index}, so nothing was removed`
        );
      } else {
        console.log(`Removed ${current.value} at index: ${index}`);
        prev.nextNode = current.nextNode;
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
