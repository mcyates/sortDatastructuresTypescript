import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

let numArr = [10, 19, 3, -5, 13, 7, -10];
let string1 = 'axDbFsAgzV';
let list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);

// const numCollection = new NumbersCollection(numArr);
// const stringCollection = new CharactersCollection(string1);

// const sorter = new Sorter(numCollection);
// const sorter = new Sorter(stringCollection);
const sorter = new Sorter(list);
sorter.sort();
list.print();
