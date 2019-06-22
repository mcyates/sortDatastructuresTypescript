"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = (function () {
    function Sorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        console.time();
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
            console.log("iter: " + i + ": ", this.collection);
        }
        console.timeEnd();
    };
    return Sorter;
}());
exports.Sorter = Sorter;
exports.default = Sorter;