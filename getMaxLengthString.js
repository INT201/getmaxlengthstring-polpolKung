const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxlength = 0
  let ans = []
  let indexans = 0
  for (let i = 0; i < arrayOfString.length; i++) {
      if(arrayOfString[i].length >= maxlength) {
          maxlength = arrayOfString[i].length
          ans[indexans++] = arrayOfString[i]
      }
      
  }
  return ans
}
module.exports = getMaxLengthString
