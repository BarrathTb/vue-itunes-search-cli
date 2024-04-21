/** @format */
import LibraryItem from '@/models/LibraryItem.js'
export default function BagCollection(arr = []) {
	// composition
	// this.items = []

	arr.addItem = function (media) {
		this.push(new LibraryItem(media))

		// return this for chaining
		return this
	}

	arr.removeItem = function (item) {
		this.splice(this.indexOf(item), 1)

		return this
	}

	return arr
}
