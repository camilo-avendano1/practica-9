const terminalArr = ['+', '-', '*', '/', '(', ')', 'num', 'id', '$'];
const nonTerminalArr = ['E', 'E\'', 'T', 'T\'', 'F'];

const rules = [
  //   +   -    *   /  (    )  num id  $
  ['', '', '', '', 'TE\'', '', 'TE\'', 'TE\'', ''],
  ['+TE\'', '-TE\'', '', '', '', '@', '', '', '@'],
  ['', '', '', '', 'FT\'', '', 'FT\'', 'FT\'', ''],
  ['@', '@', '*FT\'', '/FT\'', '', '@', '', '', '@'],
  ['', '', '', '', '(E)', '', 'num', 'id', '']
];


function addToStack(stack, val) {
  let valArr = val.split('');
  let token = '';
  for (let i = valArr.length - 1; i >= 0; i--) {
    if (valArr[i] === "'") {
      token = "'";
    } else {
      token = valArr[i] + token;
      stack.push(token);
      token = '';
    }
  }
}

function compare(val1, val2) {
  return val1 === val2;
}

function getTerminalIndex(terminalVariable) {
  return terminalArr.indexOf(terminalVariable);
}

function getNonTerminalIndex(nonTerminalVariable) {
  return nonTerminalArr.indexOf(nonTerminalVariable);
}

const entryTokensArr = ['id', '+', 'num', '*', 'id', '$'];



function evaluate(entryTokenArr, rules) {
    const initialValue = 'E';
    const stack = ['$'];
    let entryToken;
    let lastStackToken;
    let stackableValue;
    stack.push(initialValue);




    while (stack[stack.length - 1] !== '$') {
        entryToken = entryTokenArr[0];
        lastStackToken = stack[stack.length - 1];

        console.log('entryToken: ' + entryToken);
        console.log('lastStackToken: ' + lastStackToken);
        console.log('stack: ' + stack);

        if (terminalArr.includes(lastStackToken)) {// 
            if (compare(lastStackToken, entryToken)) {
                stack.pop();
                entryTokenArr.shift();
            } else {
                console.log('Error');
                break;
            }
        }

  
        else {
            console.log('Error');
            break;
        }

    }


}


evaluate(entryTokensArr, rules);