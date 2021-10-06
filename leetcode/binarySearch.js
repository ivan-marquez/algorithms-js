module.exports = function binarySearch(start, end, target, input) {
  if (start > end) {
    return false;
  }

  var mid = (start + end) / 2;

  if (input[mid] == target) {
    return true;
  } else if (input[mid] > target) {
    return binarySearch(start, mid - 1, target, input);
  } else {
    return binarySearch(mid + 1, end, target, input);
  }
};
