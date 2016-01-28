var agGrid = require('ag-grid');
require('../node_modules/ag-grid/dist/ag-grid.css');
require('../node_modules/ag-grid/dist/theme-fresh.css');

var eGridContainer = document.querySelector('#gridContainer');

var gridOptions = {
    columnDefs: [
        {displayName: 'Record', field: 'recordNumber'},
        {displayName: 'Value 1', field: 'value1'},
        {displayName: 'Value 2', field: 'value2'}
    ],
    rowData: [],
    onReady: function(params) {
        params.api.sizeColumnsToFit();
    }
};

for (var i = 0; i<100; i++) {
    gridOptions.rowData.push({
        recordNumber: i,
        value1: Math.floor(Math.random() * 10000),
        value2: Math.floor(Math.random() * 10000)
    });
}

new agGrid.Grid(eGridContainer, gridOptions);
