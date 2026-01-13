// Linked list

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Methods
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

  containsKey(key) {
    if (this.head == null) {
      return false;
    } else {
      let tmp = this.head;
      while (tmp != null && tmp.key != key) {
        tmp = tmp.nextNode;
      }
      if (tmp == null) {
        console.log(`${key} was not found`);
        return false;
      } else {
        console.log(`Found value: ${tmp.key}`);
        return true;
      }
    }
  }

  find(key) {
    if (this.head == null) {
      console.log(`${key} was not found`);
      return null;
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
      console.log(`${key} was not found`);
      return false;
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

  getProperty(propName) {
    let propArr = [];
    if (this.head == null) {
      return null;
    } else {
      let tmp = this.head;
      while (tmp != null) {
        propArr.push(tmp[propName]);
        tmp = tmp.nextNode;
      }
    }
    return propArr;
  }

  getEntries() {
    let entriesArr = [];
    if (this.head == null) {
      return null;
    } else {
      let tmp = this.head;
      while (tmp != null) {
        const entries = [tmp.key, tmp.value];
        entriesArr.push(entries);
        // entriesArr.push(tmp.value);
        tmp = tmp.nextNode;
      }
    }
    return entriesArr;
  }

  removeKey(key) {
    if (this.head == null) {
      console.log(`There is no key called: ${key}, so nothing was removed`);
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
