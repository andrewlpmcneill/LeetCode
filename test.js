function simpleArraySum(ar) {
  sum = 0;
  ar.forEach(element => sum += element);
  return sum;

}

console.log(simpleArraySum([1,2,3,4,10,11]));