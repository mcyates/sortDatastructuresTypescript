import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

let numArr = [10, 19, 3, -5, 13, 7, -10];

// const numCollection = new NumbersCollection(numArr);
const stringCollection = new CharactersCollection('axDbFSAGzV');

// const sorter = new Sorter(numCollection);
const sorter = new Sorter(stringCollection);

sorter.sort();
