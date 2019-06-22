"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = (function () {
    function CharactersCollection(data) {
        this.data = data;
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function () {
        return true;
    };
    CharactersCollection.prototype.swap = function () { };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
