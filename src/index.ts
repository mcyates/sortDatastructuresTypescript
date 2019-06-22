class Sorter {
	collection: number[];
	constructor(collection: number[]) {
		this.collection = collection;
	}
	sort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// if collection is array of numbers
				if (this.collection[j] > this.collection[j + 1]) {
					const leftHand = this.collection[j];
					this.collection[j] = this.collection[j + 1];
					this.collection[j + 1] = leftHand;

					// if collection is string do this instead
				}
			}
		}
		console.log(length);
	}
}

let collection = [5, 1, -20, 14, 9];

const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);
