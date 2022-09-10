const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxlength = 0
  let ans = []
  let indexAns = 0
  for (let i = 0; i < arrayOfString.length; i++) {
      if(arrayOfString[i].length >= maxlength) {
          maxlength = arrayOfString[i].length
      }
      
  }
  for (let n = 0; n < arrayOfString.length; n++) {
      if(arrayOfString[n].length === maxlength) {
          ans[indexAns++] = arrayOfString[n]
      }
      
  }
  return ans 
}

module.exports = getMaxLengthString
