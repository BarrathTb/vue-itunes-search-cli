/** @format */

import { Album, AudioBook, Book, Movie, MusicVideo, Podcast, Software, Song, TVShow } from '@/models/Media.js'

export default class MediaFactory {
	static createMedia(apiData) {
		switch (apiData.wrapperType) {
			case 'track':
				return this.createTrackBasedMedia(apiData)

			case 'audiobook':
				return new AudioBook(
					apiData.artworkUrl100,
					apiData.collectionName,
					apiData.artistName,
					apiData.description,
					apiData.primaryGenreName,
					apiData.trackTimeMillis,
				)

			case 'ebook':
				return new Book(apiData.artworkUrl100, apiData.trackName, apiData.artistName, apiData.genres.join(', ')) // Assuming 'genres' is an array of genre names.

			default:
				console.warn('Unrecognized wrapperType:', apiData.wrapperType)
				return null
		}
	}

	static createTrackBasedMedia(apiData) {
		switch (apiData.kind) {
			case 'album':
				return new Album(apiData.artworkUrl100, apiData.collectionName, apiData.artistName, apiData.trackCount)

			case 'song':
				return new Song(
					apiData.artworkUrl100,
					apiData.trackName,
					apiData.artistName,
					apiData.collectionName,
					apiData.trackExplicitness,
				)

			case 'feature-movie':
				return new Movie(
					apiData.artworkUrl100,
					apiData.trackName,
					apiData.artistName,
					apiData.trackTimeMillis,
					apiData.primaryGenreName,
					apiData.shortDescription,
				)

			case 'music-video':
				return new MusicVideo(apiData.artworkUrl100, apiData.trackName, apiData.artistName, apiData.primaryGenreName)

			case 'podcast':
				return new Podcast(
					apiData.artworkUrl100,
					apiData.collectionName,
					apiData.artistName,
					apiData.primaryGenreName,
					apiData.trackTimeMillis,
				)

			case 'software':
				return new Software(
					apiData.artworkUrl100,
					apiData.trackName,
					apiData.sellerName,
					apiData.genres.join(', '),
					apiData.price,
				)

			case 'tvShow':
				return new TVShow(apiData.artworkUrl100, apiData.collectionName, apiData.trackName, apiData.trackTimeMillis)

			default:
				console.warn('Unrecognized kind:', apiData.kind)
				return null
		}
	}
}
