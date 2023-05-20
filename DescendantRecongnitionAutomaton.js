const utils = require('./utils')

class DescendantRecognitionAutomaton{
    constructor(rules, terminalVariables, nonTerminalVariables){
        this._rules = rules
        this._terminalVariables = terminalVariables
        this._nonTerminalVaribales = nonTerminalVariables
    }

    get rules (){
        return this._rules;
    }
    get terminalVariables(){
        return this._terminalVariables;
    }
    get nonTerminalVariables(){
        return this._nonTerminalVaribales;
    }

    getTerminalIndex(token){
        return this.terminalVariables.indexOf(token)
    }
    
    getNonTerminalIndex(token){
        return this.nonTerminalVariables.indexOf(token)
    }

    stringToTokenArray(stringEntry){
        let tokenArray = []
        let token
        let tokenAcum = ''
        for(let i = 0; i < stringEntry.length; i++){
            token = stringEntry[i]
            tokenAcum = tokenAcum + token
            if(this.isRegistred(tokenAcum)){
                tokenArray.push(tokenAcum)
                tokenAcum = ''
            }
        }
        tokenArray.push('$')
        return tokenArray;
    }

    isRegistred(token){
        return this.terminalVariables.includes(token) || this.nonTerminalVariables.includes(token)
    }

    addFromMatrixToStack(stack, matrixValue){
        let tokenArray = matrixValue.split('') 
        let token
        let tokenAcum = ''
        for(let  i = tokenArray.length - 1; i >= 0; i--){
            token = tokenArray[i]
            tokenAcum = token + tokenAcum
            if(this.isRegistred(tokenAcum)){
                stack.push(tokenAcum)
                tokenAcum = ''
            }
        }
    }

    evaluate(entry){
        const tokenArray = this.stringToTokenArray(entry) 
        const initialValue = 'E'
        const stack = ['$']
        let entryToken;
        let lastStackToken;
        let stackableValue;
        stack.push(initialValue)
        utils.consoleLogTwoColumns('Stack: ' + utils.showArrayAsString(stack), 'Entry: ' + tokenArray.join(''), 40)
        while(stack[stack.length - 1] !== '$'){ 
            entryToken = tokenArray[0];
            lastStackToken = stack[stack.length-1]
            if(entryToken === lastStackToken){
                tokenArray.shift()
                stack.pop()
            } else{
                if(lastStackToken === '@') stack.pop()
                else{
                    stackableValue = this.rules[this.getNonTerminalIndex(lastStackToken)][this.getTerminalIndex(entryToken)]
                    stack.pop()
                    this.addFromMatrixToStack(stack,stackableValue)
                }
            }
        utils.consoleLogTwoColumns('Stack: ' + utils.showArrayAsString(stack), 'Entry: ' + tokenArray.join(''), 40)
        }
        let isValid = (tokenArray[0] === '$' && stack.length === 1)
        isValid ? console.log('\nThe entry is valid') : console.log('\nThe entry is NOT valid')
        return isValid
    }
}

module.exports = DescendantRecognitionAutomaton