"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var Sorter_1 = require("./Sorter");
var numArr = [10, 19, 3, -5, 13, 7, -10];
var stringCollection = new CharactersCollection_1.CharactersCollection('axDbFSAGzV');
var sorter = new Sorter_1.Sorter(stringCollection);
sorter.sort();
