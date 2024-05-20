/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // base case
  if(i === nums.length) return 1; 
  // normal case
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, long="") {
  // base case
  if(i >= words.length) return long;

  let word_length = words[i].length;

  if(word_length > long){
    long = word_length;
  }

  return longest(words, i+1, long);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, word="") {
  // base case
  if(i >= str.length) return word; 
  // normal case
  word += str[i];
  return everyOther(str, i+2, word);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  if(i >= str.length) return true;
  
  if(str[i] === str[str.length-1-i]){
    return isPalindrome(str,i+1);
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if(i >= arr.length) return -1;

  if(arr[i] === val){
    return i;
  }
  return findIndex(arr, val, i+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, word="") {
  if(i >= str.length) return word;
  word += str[str.length-1-i];
  return revString(str, i+1, word);
}

/** gatherStrings: given an object, return an array of all of the string values. */

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

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length-1) {
  if (high >= low) {
    let mid=low+Math.floor((high-low)/2);
    if (arr[mid] === val) return mid;
    if (arr[mid] > val) return binarySearch(arr, val, low, mid-1); 
    return binarySearch(arr, val, mid+1, high);
  }
  return -1;
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
