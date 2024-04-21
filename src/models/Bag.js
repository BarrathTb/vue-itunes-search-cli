/** @format */

export default class Bag {
	constructor() {
		this.items = []
	}
	addItem(item) {
		this.items.push(item)
	}
	removeItem(item) {
		const index = this.items.indexOf(item)
		if (index > -1) {
			this.items.splice(index, 1)
		}
	}
	checkout(checkoutName) {
		this.items.forEach((item) => {
			item.checkOut()
			item.checkedOutBy = checkoutName || 'Anonymous'
		})
		this.items = []
	}
}
