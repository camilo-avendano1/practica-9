const terminalArr = ['+', '-', '*', '/', '(', ')', 'num', 'id', '$', '@']
const nonTerminalArr = ['E', 'E\'', 'T', 'T\'', 'F']


function stackFromMatrix(stack, matrixValue){
    let tokenArray = matrixValue.split('') 
    let token
    let tokenAcum = ''
    for(let  i = tokenArray.length - 1; i >= 0; i--){
        token = tokenArray[i]
        tokenAcum = token + tokenAcum
        if(isRegistred(tokenAcum)){
            stack.push(tokenAcum)
            tokenAcum = ''
        }
    }
}

function showArrayAsString(arr){
    return '[' + arr.join(',') + ']'
}

function consoleLogTwoColumns(left, right, columnWidth) {
    const paddedLeft = left.padEnd(columnWidth);
    console.log(`${paddedLeft}${right}`);
  }

function isRegistred(token){
    return terminalArr.includes(token) || nonTerminalArr.includes(token)
}

function compare(val1,val2) {
    return val1 === val2
}

function getTerminalIndex(terminalVariable){
    return terminalArr.indexOf(terminalVariable)
}

function getNonTerminalIndex(nonTerminalVarible){
    return nonTerminalArr.indexOf(nonTerminalVarible)
}




function evaluateEntry(entryTokenArr, rules){
    const initialValue = 'E'
    const stack = ['$']
    let entryToken;
    let lastStackToken;
    let stackableValue;
    stack.push(initialValue)
    consoleLogTwoColumns('Stack: ' + showArrayAsString(stack), 'Entry: ' + showArrayAsString(entryTokenArr), 40)
    while(stack[stack.length - 1] !== '$'){ 
        entryToken = entryTokenArr[0];
        lastStackToken = stack[stack.length-1]
        if(compare(entryToken , lastStackToken)){
            entryTokenArr.shift()
            stack.pop()
        } else{
            if(lastStackToken === '@') stack.pop()
            else{
                stackableValue = rules[getNonTerminalIndex(lastStackToken)][getTerminalIndex(entryToken)]
                stack.pop()
                stackFromMatrix(stack,stackableValue)
            }
        }
    consoleLogTwoColumns('Stack: ' + showArrayAsString(stack), 'Entry: ' + showArrayAsString(entryTokenArr), 40)
    }
    if (entryTokenArr[0] === '$' && stack.length === 1) return '\nThe entry is valid'
    return '\nThe entry is not valid'
}

//matrix of rules for the grammar
const rules = [
    //   +   -    *   /  (    )  num id  $
        ['', '', '', '', 'TE\'', '', 'TE\'', 'TE\'', ''],
        ['+TE\'', '-TE\'', '', '', '', '@', '', '', '@'],
        ['', '', '', '', 'FT\'', '', 'FT\'', 'FT\'', ''],
        ['@', '@', '*FT\'', '/FT\'', '', '@', '', '', '@'],
        ['', '', '', '', '(E)', '', 'num', 'id', '']
    ]

const entryTokensArr = ['id', '+' , 'num' , '*' , 'id', '$']

console.log(evaluateEntry(entryTokensArr, rules))