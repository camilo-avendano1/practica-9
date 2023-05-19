const terminalArr = ['+', '-', '*', '/', '(', ')', 'num', 'id', '$']
const nonTerminalArr = ['E', 'E\'', 'T', 'T\'', 'F']

const rules = [
    //   +   -    *   /  (    )  num id  $
        ['', '', '', '', 'TE\'', '', 'TE\'', 'TE\'', ''],
        ['+TE\'', '-TE\'', '', '', '', '@', '', '', '@'],
        ['', '', '', '', 'FT\'', '', 'FT\'', 'FT\'', ''],
        ['@', '@', '*FT\'', '/FT\'', '', '@', '', '', '@'],
        ['', '', '', '', '(E)', '', 'num', 'id', '']
    ]

    const entry = "id+num*id$" //verification string

    stackableValue = rules[getNonTerminalIndex(lastStackToken)][getTerminalIndex(entryTokenArr)]
    console.log(stackableValue);



function addToStack(stack, val){
    console.log('Hola')
    let valArr = val.split('') 
    token = ''
    for(let  i = valArr.length - 1; i >= 0; i--){
        console.log(i)
        if(valArr[i] === "'") token = "'"
        else{
            console.log('Pasa por acá con token: ' + token)
            token = valArr[i] + token
            stack.push(token)
            token = ''
        }
    }
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



const entryTokensArr = ['id', '+' , 'num' , '*' , 'id', '$']
function evaluateEntry(entryTokenArr, rules){
    const initialValue = 'E'
    const stack = ['$']
    let entryToken;
    let lastStackToken;
    let stackableValue;
    stack.push(initialValue)
    while(stack[stack.length - 1] !== '$'){ 
        entryToken = entryTokenArr[0];
        lastStackToken = stack[stack.length-1]
        if(compare(entryToken , lastStackToken)){
            entryTokenArr.shift()
            stack.pop()
        } else{
            console
            stackableValue = rules[getNonTerminalIndex(lastStackToken)][getTerminalIndex(entryTokenArr)]
            console.log(stackableValue);
            stack.pop()
            addToStack(stack,stackableValue)
        }
    }
    if (entryTokensArr[entryTokensArray.lenght-1] === '$') return 'Es válida'
    return 'No es válida'
}

//matrix of rules for the grammar

