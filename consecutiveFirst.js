let arrayOfInt = [1,0,0,1,0,1,1]
let consecutiveCount = 0
let initialIndex = 0
let tempValue = 0
let maxCounter = 0

function recursive (arrayOfInt) {

  tempValue = arrayOfInt[initialIndex]

  if(initialIndex === (arrayOfInt.length)){
    return maxCounter
  } else {
    if(arrayOfInt[initialIndex] === arrayOfInt[arrayOfInt.length - (arrayOfInt.length - initialIndex) + 1]){
      consecutiveCount += 1
    } else {
      if(consecutiveCount >= maxCounter){
        maxCounter = consecutiveCount + 1
      }
      consecutiveCount = 0
    }

    initialIndex+=1
    recursive(arrayOfInt)
  }

}