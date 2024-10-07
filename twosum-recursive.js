var twoSum = function(nums, target) {

    let result = recursiveadd(nums,target,"",0,{})
    
    return result.split(",").map((x)=>Number(x))
};


function recursiveadd(nums,target,array,startindex,mapvaluetolist) {
  
   
    if(startindex === (nums.length-1) &&  nums[startindex] != target){
        return ''
    }
    if(nums[startindex] == target) {
        
        array = array.length != ""  ? array + ","+startindex : startindex.toString();
       
        if(array.split(",").length == 1) {            
            for (let i=1;i<nums.length;i++){
                if(nums[i] ==0 ) {
                    array = array +","+(startindex + i)
                    break;
                }
            }
        }
        if(array.split(",").length <= 2) {
            return array
        }
        return ''

    } else {
            let value = nums[startindex];
            let index= startindex+1;

            let newarray = array.length ? array + "," + startindex : startindex.toString() ;



            let output = recursiveadd(nums,target-value,newarray,index);
        
            if(output.split(",").length != 2 ) {
            
                
             output = recursiveadd(nums,target,array,index);
                
            }
            return output
    }

}
