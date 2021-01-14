function balancedBrackets (brackets) {
    let tempArray = [];
    let bracketsDictionary = {
        '(': ')',
        '{': '}',
        '[': ']',
        '<': '>'
    }

    for (const bracket of brackets) {
        if (bracket === '(' || bracket === '{' || bracket === '[' || bracket === '<' ) {
            tempArray.push(bracket);
        } else {
            let lastElement = tempArray.pop()
            if (bracket !== bracketsDictionary[lastElement]) {
                //inside here, the the condition will only fulfill when the closing bracket from the iteration is not match to the closing bracket from the dict
                //closing bracket from dictionary will be take out based on its key, which is opening bracket that has match to it
                //when the condition fulfilled meaning that the opening bracket (the key) doesn't match to the corresponding closing bracket which came from the iteration, unbalanced
                return 'NO'
            };
        }
    }
    
    if (tempArray.length !== 0) {
        //this if used to check whether the tempArray has opening brackets left
        //if so, then it means the iteration could not found any match closing brackets for it (unbalanced)
        return 'NO'
    };

    return 'YES';
}

console.log(balancedBrackets("{[()]}")); // return YES
console.log(balancedBrackets("{[(])}")); // return NO
console.log(balancedBrackets("{(([])[])[]}")); // return YES