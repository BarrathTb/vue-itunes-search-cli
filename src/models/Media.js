/** @format */

class Media {
	static type = 'Media'

	constructor({ title, artist, genre, description }) {
		this.title = title
		this.artist = artist
		this.genre = genre
		this.description = description
	}

	get type() {
		return this.constructor.type
	}
}

class Movie extends Media {
	static type = 'Movie'
	static detailsComponent = 'MovieDetails'

	constructor({
		title,
		actor,
		genre,
		artist,
		producer,
		rating,
		director,
		releaseYear,
		featureFilm,
		movieArtist,
		movie,
		description,
	}) {
		super({ title, artist, genre, description })
		this.actor = actor
		this.producer = producer
		this.rating = rating
		this.director = director
		this.releaseYear = releaseYear
		this.featureFilm = featureFilm
		this.movieArtist = movieArtist
		this.movie = movie
	}
}

class Music extends Media {
	static type = 'Music'
	static detailsComponent = 'MusicDetails'

	constructor({ title, artist, genre, album, composer, songTerm }) {
		super({ title, artist, genre })
		this.album = album
		this.composer = composer
		this.songTerm = songTerm
	}
}

class Podcast extends Media {
	static type = 'Podcast'
	static detailsComponent = 'PodcastDetails'

	constructor({ title, language, author, genre, keywords, description }) {
		super({ title, genre, description })
		this.language = language
		this.author = author
		this.keywords = keywords
	}
}

class Audiobook extends Media {
	static type = 'Audiobook'
	static detailsComponent = 'AudiobookDetails'

	constructor({ title, author, genre }) {
		super({ title, genre })
		this.author = author
	}
}

class MusicVideo extends Media {
	static type = 'MusicVideo'
	static detailsComponent = 'MusicVideoDetails'

	constructor({ title, artist, genre, album, songTerm }) {
		super({ title, artist, genre })
		this.album = album
		this.songTerm = songTerm
	}
}

class TvShow extends Media {
	static type = 'TvShow'
	static detailsComponent = 'TvShowDetails'

	constructor({ title, genre, episodeTerm, seasonTerm, showTerm, description }) {
		super({ title, genre, description })
		this.episodeTerm = episodeTerm
		this.seasonTerm = seasonTerm
		this.showTerm = showTerm
	}
}

class Software extends Media {
	static type = 'Software'
	static detailsComponent = 'SoftwareDetails'

	constructor({ title, softwareDeveloper }) {
		super({ title })
		this.softwareDeveloper = softwareDeveloper
	}
}

export { Audiobook, Audiobook as EBook, Media, Movie, Music, MusicVideo, Podcast, Movie as ShortFilm, Software, TvShow }
