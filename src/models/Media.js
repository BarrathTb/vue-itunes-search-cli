/** @format */

class MediaItem {
	image
	title
	type

	constructor({ image, title, type }) {
		this.artworkUrl100 = image
		this.title = title
		this.type = type
	}
}

class Album extends MediaItem {
	static type = 'Album'
	static detailsComponent = 'AlbumDetails'

	artist
	trackCount

	constructor(image, title, artist, trackCount) {
		super({ image, title, type: Album.type })
		this.artist = artist
		this.trackCount = trackCount
	}
}

class AudioBook extends MediaItem {
	static type = 'AudioBook'
	static detailsComponent = 'AudioBookDetails'

	artist
	description
	genre
	runtime

	constructor(image, title, artist, description, genre, runtime) {
		super({ image, title, type: AudioBook.type })
		this.artist = artist
		this.description = description
		this.genre = genre
		this.runtime = runtime
	}
}

class Book extends MediaItem {
	static type = 'Book'
	static detailsComponent = 'BookDetails'

	artist
	genre

	constructor(image, title, artist, genre) {
		super({ image, title, type: EBook.type })
		this.artist = artist
		this.genre = genre
	}
}

class Movie extends MediaItem {
	static type = 'Movie'
	static detailsComponent = 'MovieDetails'

	director
	runtime
	genre
	description

	constructor(image, title, director, runtime, genre, description) {
		super({ image, title, type: Movie.type })
		this.director = director
		this.runtime = runtime
		this.genre = genre
		this.description = description
	}
}

class MusicVideo extends MediaItem {
	static type = 'MusicVideo'
	static detailsComponent = 'MusicVideoDetails'

	artist
	genre
	runtime

	constructor(image, title, artist, genre, runtime) {
		super({ image, title, type: MusicVideo.type })
		this.artist = artist
		this.genre = genre
		this.runtime = runtime
	}
}

class Podcast extends MediaItem {
	static type = 'Podcast'
	static detailsComponent = 'PodcastDetails'

	artist
	genre
	runtime
	constructor(image, title, artist, genre, runtime) {
		super({ image, title, type: Podcast.type })
		this.artist = artist
		this.genre = genre
		this.runtime = runtime
	}
}

class Software extends MediaItem {
	static type = 'Software'
	static detailsComponent = 'SoftwareDetails'

	developer
	category
	price

	constructor(image, title, developer, category, price) {
		super({ image, title, type: Software.type })
		this.developer = developer
		this.category = category
		this.price = price
	}
}

class Song extends MediaItem {
	static type = 'Song'
	static detailsComponent = 'SongDetails'

	artist
	album
	explicitness

	constructor(image, title, artist, album, explicitness) {
		super({ image, title, type: Song.type })
		this.artist = artist
		this.album = album
		this.explicitness = explicitness
	}
}

class TVShow extends MediaItem {
	static type = 'TvShow'
	static detailsComponent = 'TvShowDetails'

	episodeName
	length

	constructor(image, title, episodeName, length) {
		super({ image, title, type: TvShow.type })
		this.episodeName = episodeName
		this.length = length
	}
}

export { Album, AudioBook, Book, MediaItem, Movie, MusicVideo, Podcast, Software, Song, TVShow }
