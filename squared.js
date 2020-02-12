function squared(arr) {
  return _.partition(arr, function (num) { return Math.sqrt(num) % 1 === 0 });
}
console.log(squared([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));