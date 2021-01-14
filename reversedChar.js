let arrayOfChar = ['h','e','l','l','o']
let reversedChar = []
let initialIndex = arrayOfChar.length - 1

function recursive (arrayOfChar) {
  if(initialIndex < 0){
    return reversedChar
  } else {
    reversedChar.push(arrayOfChar[initialIndex])

    initialIndex = initialIndex - 1
    recursive(arrayOfChar)
  }
}

recursive(arrayOfChar)