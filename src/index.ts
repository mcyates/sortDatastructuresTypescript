import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

let numArr = [10, 19, 3, -5, 13, 7, -10];

const collection = new NumbersCollection(numArr);

const sorter = new Sorter(collection);
sorter.sort();
