export class CharactersCollection {
	constructor(public data: string) {
		this.data = data;
	}
	get length() {
		return this.data.length;
	}
	compare(): boolean {
		return true;
	}
	swap(): void {}
}
