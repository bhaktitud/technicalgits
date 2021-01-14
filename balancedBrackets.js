function balancedBrackets (brackets) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    for (const bracket of brackets) {
        if (bracket === '(' || bracket === '{' || bracket === '[' || bracket === '<' ) {
            stack.push(bracket);
        } else {
            let last = stack.pop()
            if (bracket !== map[last]) {return 'NO'};
        }
    }
    
    if (stack.length !== 0) {return 'NO'};

    return 'YES';
}

console.log(balancedBrackets("{[()]}")); // returns YES
console.log(balancedBrackets("{[(])}")); // returns NO
console.log(balancedBrackets("{(([])[])[]}")); // returns YES