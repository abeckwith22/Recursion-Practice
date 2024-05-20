## Recursion Practice

#### 1. product
- [x] calculate the product of an array of numbers.
```js
function gatherStrings(obj, arr=[]) {
  for(const key in obj){
    if(typeof key === 'object'){
      arr.join(gatherStrings(obj[key], arr));
    }
    else if(typeof obj[key] === 'string'){
      arr.push(obj[key]);
    }
  }
  return arr;
}
```
#### 2. longest
- [x] return the length of the longest word in an array of words.
```js
function longest(words, i=0, long="") {
  // base case
  if(i >= words.length) return long;

  let word_length = words[i].length;

  if(word_length > long){
    long = word_length;
  }

  return longest(words, i+1, long);
}
```
#### 3. everyOther
- [x] return a string with every other letter.
```js
function everyOther(str, i=0, word="") {
  // base case
  if(i >= str.length) return word; 
  // normal case
  word += str[i];
  return everyOther(str, i+2, word);
}
```
#### 4. isPalindrome
- [x] checks whether a string is a palindrome or not.
```js
function isPalindrome(str, i=0) {
  if(i >= str.length) return true;
  
  if(str[i] === str[str.length-1-i]){
    return isPalindrome(str,i+1);
  }
  return false;
}
```
#### 5. findIndex
- [x] return the index of val in arr (or -1 if val is not present).
```js
function findIndex(arr, val, i=0) {
  if(i >= arr.length) return -1;

  if(arr[i] === val){
    return i;
  }
  return findIndex(arr, val, i+1);
}
```
#### 6. revString
- [x] return a copy of a string, but in reverse.
```js
function revString(str, i=0, word="") {
  if(i >= str.length) return word;
  word += str[str.length-1-i];
  return revString(str, i+1, word);
}
```
#### 7. gatherStrings
- [x] give an object, return an array of all the string values
```js
function gatherStrings(obj, arr=[]) {
  for(const key in obj){
    if(typeof obj[key] === 'object'){
      gatherStrings(obj[key], arr);
    }
    else if(typeof obj[key] === 'string'){
      arr.push(obj[key]);
    }
  }
  return arr;
}
```
#### 8. binarySearch
- [x] Given an array(not a linked list!) of sorted numbers and a value, return the index of that value. If not found, return -1. This algorithm should run in O(log(N)) time (where N is the number of elements in the array)
```js
function binarySearch(arr, val, low=0, high=arr.length-1) {
  if (high >= low) {
    let mid=low+Math.floor((high-low)/2);
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) return binarySearch(arr, val, low, mid-1); 
    return binarySearch(arr, val, mid+1, high);
  }
  return -1;
}
```