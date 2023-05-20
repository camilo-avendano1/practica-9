function showArrayAsString(arr){
    return '[' + arr.join(',') + ']'
}

function consoleLogTwoColumns(left, right, columnWidth) {
    const paddedLeft = left.padEnd(columnWidth);
    console.log(`${paddedLeft}${right}`);
}

module.exports = {
    consoleLogTwoColumns,
    showArrayAsString
}