/** @format */

class Media {
	static type = 'Media'

	get type() {
		return this.type
	}

	title = undefined
	artist = undefined
	artworkUrl100 = undefined
}

class Movie {
	static type = 'Movie'
	static detailsComponent = 'MovieDetails'

	title
	actor
	genre
	artist
	runtime
	producer
	rating
	director
	releaseYear
	featureFilm
	movieArtist
	movie
	description
	constructor(
		title,
		actor,
		genre,
		artist,
		runtime,
		producer,
		rating,
		director,
		releaseYear,
		featureFilm,
		movieArtist,
		movie,
		description,
	) {
		this.title = title
		this.actor = actor
		this.genre = genre
		this.artist = artist
		this.runtime = runtime
		this.producer = producer
		this.rating = rating
		this.director = director
		this.releaseYear = releaseYear
		this.featureFilm = featureFilm
		this.movieArtist = movieArtist
		this.movie = movie
		this.description = description
	}
}

class Album {
	static type = 'Album'
	static detailsComponent = 'AlbumDetails'

	title
	artist
	trackCount

	constructor(title, artist, trackCount) {
		this.title = title
		this.artist = artist
		this.trackCount = trackCount
	}
}

export { AudioBook, EBook, Media, Movie, Music, MusicVideo, Podcast, Software, TvShow }
