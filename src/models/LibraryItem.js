/** @format */

function LibraryItem(media, quantity = 1) {
	const STATUSES = { IN: 'in', OUT: 'out', LOST: 'lost' }

	media.status = STATUSES.IN
	media.quantity = quantity
	media.isCheckedOutBy = null

	media.checkIn = function () {
		if (this.quantity < 1) this.quantity += 1
		if (this.quantity > 0) this.status = STATUSES.IN
		this.isCheckedOutBy = null
	}

	media.checkOut = function (borrowerName) {
		if (this.isAvailable()) {
			this.quantity -= 1
			if (this.quantity === 0) {
				this.status = STATUSES.OUT
				this.isCheckedOutBy = borrowerName
			}
		} else {
			console.error('No copies available for checkout')
		}
	}

	media.isAvailable = function () {
		return this.quantity > 0
	}

	return media
}

export default LibraryItem
