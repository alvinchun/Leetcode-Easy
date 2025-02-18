var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }
    
    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);
    
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    prevRows.push(newRow);
    return prevRows;
};

var generate = function(numRows) {
    let result = [];
    if (numRows === 0) {
        return result;
    }

    let firstRow = [1];
    result.push(firstRow);

    for (let i = 1; i < numRows; i++) {
        let prevRow = result[i - 1];
        let currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }

    return result;
};

var generate = numRows => 
    Array.from({ length: numRows }, (_, i, arr) => 
        arr[i] = Array(i + 1).fill(1).map((_, j) => j > 0 && j < i ? arr[i - 1][j - 1] + arr[i - 1][j] : 1)
    );


var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1); // First and last elements are always 1

        for (let j = 1; j < i; j++) { // Fill middle elements
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row); // Add row to result
    }

    return result;
};

