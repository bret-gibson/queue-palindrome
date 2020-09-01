// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
  printQueue() {
    let toString = "";
    for (let i = 0; i < this.items.length; i++) {
      toString += this.items[i] + " ";
    }
    return toString;
  }
}

function isPalindrome(string) {
  let queue = new Queue();
  let stringArr = string.split("");
  let reversedString = "";

  // put all letters into the queue - starting from the back this time
  // due to a queue's first in first out design
  for (let i = string.length - 1; i >= 0; i--) {
    queue.enqueue(string[i]);
  }

  while (queue.isEmpty() === false) {
    reversedString += queue.dequeue();
  }

  if (reversedString === string) {
    return true;
  } else {
    return false;
  }
}

// testing odd number of letters
if (isPalindrome("racecar") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing even number of letters
if (isPalindrome("abbbba") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing odd non-palindrome
if (isPalindrome("hello") === true) {
  console.log("Yes");
} else {
  console.log("No");
}

// testing even non-palindrome
if (isPalindrome("code") === true) {
  console.log("Yes");
} else {
  console.log("No");
}
