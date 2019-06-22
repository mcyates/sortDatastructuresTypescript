"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numArr = [10, 19, 3, -5, 13, 7, -10];
var collection = new NumbersCollection_1.NumbersCollection(numArr);
var sorter = new Sorter_1.Sorter(collection);
sorter.sort();
