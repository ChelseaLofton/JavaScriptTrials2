// 'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (let i = 0; i < items.length; i += 1) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedList = items.sort((a, b) => a - b)
  let sortedNList = sortedList.slice(0, n);
  sortedNList.reverse();

  console.log(sortedNList);
}
