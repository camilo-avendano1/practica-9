const terminalArr = ['+', '-', '*', '/', '(', ')', 'num', 'id', '$']
const nonTerminalArr = ['E', 'E\'', 'T', 'T\'', 'F']
const stack = []





function popStack(str){
    let stack = str.split('');
    let variable = stack.pop();
    if(variable == "'" ) variable = stack.pop() + variable;
    return variable
}

function addToStack(stack, val){
    let token;
    for(let  i = val.length; i == 0; i--){
        token = ''
        if(val[i] == "'") token = "'"
        else{
            token = val[i] + token
            stack.push(token)
        }
    stack.push(val);
}

const value = "TE'"
const stack = []
addToStack(value, stack);
console.log(stack);

function compare(val1,val2) {
    return val1 === val2
}

function getTerminalIndex(terminalVariable){
    return terminalArr.indexOf(terminalVariable)
}

function getNonTerminalIndex(nonTerminalVarible){
    return nonTerminalArr.indexOf(nonTerminalVarible)
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

const entry = "id+num*id$" //verification string
const entryTokensArr = ['id', '+' , 'num' , '*' , 'id', '$']
function evaluateEntry(entryTokenArr, rules){
    const initialValue = 'E'
    const stack = ['$']
    let entryToken;
    stack.push(initialValue)
    while(stack[stack.length - 1] !== $){ 
        entryToken = entryTokenArr[0];
        if(compare(entryToken , stack[stack.length-1])){
            entryTokenArr.shift()
        } else{
            stackableValue = rules[getNonTerminalIndex(entryTokenArr)]
            addToStack(stackableValue)
        }
        
    }
}
}