﻿var dataSource = [
    { country: 'China', y014: 320866959, y1564: 853191410, y65: 87774113 },
    { country: 'India', y014: 340419115, y1564: 626520945, y65: 47063757 },
    { country: 'United States', y014: 58554755, y1564: 182172625, y65: 34835293 },
    { country: 'Indonesia', y014: 68715705, y1564: 146014815, y65: 10053690 },
    { country: 'Brazil', y014: 50278034, y1564: 113391494, y65: 9190842 },
    { country: 'Russia', y014: 26465156, y1564: 101123777, y65: 18412243 }
];
var series = [
    { valueField: 'y014', name: '0-14 years' },
    { valueField: 'y1564', name: '15-64 years' },
    { valueField: 'y65', name: '65 years and older' }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'country',
            type: 'bar'
        },
        series: series,
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        valueAxis: {
            type: 'logarithmic',
            label: { format: 'largeNumber' }
        }
    });

    $("#getSVG").click(function () {
        var chart = $('#chartContainer').dxPolarChart('instance');
        $('#widgetSVG').html(chart.svg());
    });
});