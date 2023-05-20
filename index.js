const DescendantRecognitionAutomaton = require('./DescendantRecongnitionAutomaton.js')


const rules = [
    //   +   -    *   /  (    )  num id  $
        ['', '', '', '', 'TE\'', '', 'TE\'', 'TE\'', ''],
        ['+TE\'', '-TE\'', '', '', '', '@', '', '', '@'],
        ['', '', '', '', 'FT\'', '', 'FT\'', 'FT\'', ''],
        ['@', '@', '*FT\'', '/FT\'', '', '@', '', '', '@'],
        ['', '', '', '', '(E)', '', 'num', 'id', '']
    ]
const terminalArr = ['+', '-', '*', '/', '(', ')', 'num', 'id', '$', '@']
const nonTerminalArr = ['E', 'E\'', 'T', 'T\'', 'F']

const automaton = new DescendantRecognitionAutomaton(rules, terminalArr, nonTerminalArr)

var entry = 'id+num*id'
automaton.evaluate(entry)

