function insertElementToSorted(arr, ele, start=0,end=null) {
    var n , mid
    
    if (end == null) {
        end = arr.length-1;
    }
    n = end - start 
     
    if (n%2 == 0) {
        mid = start + n/2;        
    } else {
      mid = start + (n-1)/2
    }
    if (start == end) {
        return start
    }
 

    if (arr[0] > ele ) return 0;
    if (arr[end] < ele) return end+2; 
    if (arr[mid] >= ele  &&   arr[mid-1] <= ele) {
        return mid
    }

    if (arr[mid] > ele  &&   arr[mid-1] > ele) {
        return insertElementToSorted(arr,ele,start,mid-1)    
    }

    if (arr[mid] <= ele  &&   arr[mid+1] >= ele) {
        return  mid + 1
    }

    if (arr[mid] < ele  &&   arr[mid-1] < ele) {
        return insertElementToSorted(arr,ele,mid,end)
    }

    if(arr[mid] < ele  &&   arr[mid+1] < ele) {
           console.log("mid+1", mid+1, end)
          return insertElementToSorted(arr,ele,mid+1,end)
    
    }
}
