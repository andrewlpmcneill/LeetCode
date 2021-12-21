var twoSum = (nums, target) => {

  answerIndex = [];

  let counter = 0;

  while (counter < nums.length) {

    for (let i = counter + 1; i < nums.length; i++) {

      if (nums[counter] + nums[i] === target) {
        
        answerIndex.push(counter, i);
        return answerIndex;
      
      }

    }
    
    counter++;

  }

};