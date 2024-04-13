/** @format */

function LibraryItem(media) {
	const STATUSES = { IN: 'in', OUT: 'out', LOST: 'lost' }

	// set the default status
	media.status = STATUSES.IN

	// methods
	media.checkIn = function () {
		this.status = STATUSES.IN
	}

	media.checkOut = function () {
		this.status = STATUSES.OUT
	}

	media.isAvailable = function () {
		return this.status === STATUSES.IN
	}

	// return the modified book/movie
	return media
}
export default LibraryItem
