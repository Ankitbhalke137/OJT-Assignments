const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const generateBtn = document.getElementById('generateBtn');
const tableContainer = document.getElementById('tableContainer');

generateBtn.addEventListener('click', function() {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    let tableHtml = '<table>';
    
    // Generate headers
    tableHtml += '<tr>';
    for (let j = 1; j <= cols; j++) {
        tableHtml += `<th>Header ${j}</th>`;
    }
    tableHtml += '</tr>';

    // Generate rows
    for (let i = 1; i <= rows; i++) {
        tableHtml += '<tr>';
        for (let j = 1; j <= cols; j++) {
            tableHtml += `<td>Row ${i}, Col ${j}</td>`;
        }
        tableHtml += '</tr>';
    }
    
    tableHtml += '</table>';
    tableContainer.innerHTML = tableHtml;
});
