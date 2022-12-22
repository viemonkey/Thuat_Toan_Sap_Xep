"use strict";
exports.__esModule = true;
var SellectionSort_1 = require("./SellectionSort");
SellectionSort_1.SelectionSort.selectionSort(SellectionSort_1.SelectionSort.list);
for (var i = 0; i < SellectionSort_1.SelectionSort.list.length; i++)
    console.log(SellectionSort_1.SelectionSort.list[i] + " ");
