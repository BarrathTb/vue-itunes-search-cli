/** @format */

import LibraryItem from '@/models/LibraryItem.js'
export class LibraryCollection {
	constructor() {
		this.items = []

		this.addItem = function (item) {
			this.items.push(new LibraryItem(item))

			return this
		}

		this.removeItem = function (item) {
			this.items.splice(this.items.indexOf(item), 1)

			return this
		}
		this.clearItems = function () {
			this.items = [] // Assuming this class manages an array called 'items'
		}
	}
}
