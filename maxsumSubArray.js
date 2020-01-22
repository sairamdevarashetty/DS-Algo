function maxSumArr(arr) {
  var s = [];
  s.length = arr.length;
  for (var i in arr){
  s[i] = (s[i-1] + arr[i]) > arr[i] ?   s[i-1] + arr[i] : arr[i];
  }
  console.log("s", s);
}
