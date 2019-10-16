function merge(m,n) {
  let result = [];
  let j=0;
  let i =0;
  while( i < m.length   ) {
    if (m[i] > n[j]) {
      result[j+i] = n[j];
      j++;
    } else {
      result[i+j] = m[i]; 
      i++;
    }
  }
  if(result.length < m.length+n.length) {
   let sliceArr = n.slice(j,n.length);
   result = result.concat(sliceArr);
  }
  return result;
}


function splitArray(arr) { 
  var arr1 = arr.slice(0,arr.length/2);
  var arr2 = arr.slice(arr.length/2, arr.length);
  var m = [];
  var n = [];
  if (arr1.length < 2) {
    m = arr1;
  } else {
    m = splitArray(arr1);
  }

  if(arr2.length < 2) {
    n = arr2;
  } else {
    n = splitArray(arr2);
  }
  
  let res = merge(m,n);
  return res;
}

function d(array){
   return splitArray(array);
}


