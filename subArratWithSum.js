// Time Complexity O(n^2)


function issubArrayWithSum (arr, sum) {
  let S = [];
  let count = 0;
  let result = [];
  S.length = arr.length;
  S.fill(0);
  for (var i=0; i < arr.length; i++) {
    S[i] = i ===0 ? arr[i] : S[i-1] + arr[i];
    if (S[i] > sum) {
      let j = 0;
      let iSum = S[i];
      while ( j < i && iSum > sum ) {
       iSum = iSum > sum ? iSum-arr[j] : iSum;
       if ( iSum === sum ) {
          count++;
          result.push([j+1,i]);
          break;
        }         
       j++;
      }
    }
  }
  console.log("Indexes List",result);
  return count;
}
