// sum of number
(function(){
    var nums = [2, 7, 11, 15];
    var target = 13;

    var twoSum = function(nums, target) {
        for(var i=0; i<= nums.length; i++){
            // check if the first number is less than target number
            if(compareTarget(nums[i], target)){
                for(var j = i; j<=nums.length; j++){
                    if(nums[j] != nums[i]){
                        if(target == (nums[j] + nums[i])){
                            var final = new Array();
                            final.push(i);
                            final.push(i+1);
                            return final;
                        };
                    }
                }
            }
        }
    };

    var compareTarget = function(num, target){
        if(num <= target){
            return num;
        }
        return false;
    }

    console.log(twoSum(nums, target)) ;

})();