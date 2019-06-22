import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

interface Collection {
	length: number;
	compare(): boolean;
	swap(): void;
}

export class Sorter {
	constructor(public collection: NumbersCollection) {
		this.collection = collection;
	}
	sort(): void {
		console.time();
		const length = this.collection.length;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swap(j, j + 1);
				}
			}
			console.log(`iter: ${i}: `, this.collection);
		}
		console.timeEnd();
	}
}

export default Sorter;
