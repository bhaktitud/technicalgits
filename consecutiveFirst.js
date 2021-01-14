let consecutiveCount = 0
let initialIndex = 0
let tempValue = 0
let maxCounter = 0
const findThisInt = 1

function recursive (arrayOfInt) {

  tempValue = arrayOfInt[initialIndex]

  if(initialIndex === (arrayOfInt.length)){
    return maxCounter
  } else {
    if(arrayOfInt[initialIndex] === arrayOfInt[arrayOfInt.length - (arrayOfInt.length - initialIndex) + 1] && arrayOfInt[initialIndex] === findThisInt){
      consecutiveCount += 1
    } else {
      if(consecutiveCount >= maxCounter){
        maxCounter = consecutiveCount + 1
      }
      consecutiveCount = 0
    }

    initialIndex+=1
    return recursive(arrayOfInt)
  }

}

console.log(recursive([1,0,0,1,0,1,1])) //print 2, the max consecutive 1s
// console.log(recursive([1,1,0,1,1,1])) //print 3, the max consecutive 1s