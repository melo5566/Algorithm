var findDuplicate = function(nums) {
    if (nums.length) {
        var slow = nums[0];
        var fast = nums[nums[0]];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
            console.log(slow, fast);
        }
        fast = 0;
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
            console.log(slow, fast);
        }
        return slow;    
    }
    return -1;
};