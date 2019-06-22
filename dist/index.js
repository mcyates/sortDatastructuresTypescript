"use strict";
var Sorter = (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
        console.log(length);
    };
    return Sorter;
}());
var collection = [5, 1, -20, 14, 9];
var sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);
