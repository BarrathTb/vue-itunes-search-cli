/** @format */

export default class MediaFactory {
	// Factory to create object models for results returned by iTunes Search API.

	static createMedia(iTunesItem) {
		let newItem = false
		switch (iTunesItem.type) {
			case 'movie':
				newItem = Object.assign(new Movie(), iTunesItem)
				break
			case 'podcast':
				newItem = Object.assign(new Podcast(), iTunesItem)
				break
			case 'music':
				newItem = Object.assign(new Music(), iTunesItem)
				break
			case 'musicVideo':
				newItem = Object.assign(new MusicVideo(), iTunesItem)
				break
			case 'audioBook':
				newItem = Object.assign(new AudioBook(), iTunesItem)
				break
			case 'shortFilm':
				newItem = Object.assign(new ShortFilm(), iTunesItem)
				break
			case 'software':
				newItem = Object.assign(new Software(), iTunesItem)
				break
			case 'tvShow':
				newItem = Object.assign(new TvShow(), iTunesItem)
				break
			case 'all':
				newItem = Object.assign(new All(), iTunesItem)
				break
				deafult: console.error(`Unknown type: ${iTunesItem.type}`)
		}
	}
}
