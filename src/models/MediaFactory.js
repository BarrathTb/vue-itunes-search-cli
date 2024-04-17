/** @format */

import { Audiobook, EBook, Movie, Music, MusicVideo, Podcast, Software, TvShow } from '@/models/Media.js'

export default class MediaFactory {
	static createMedia(iTunesItem) {
		let type = iTunesItem.wrapperType || iTunesItem.kind

		if (type === 'track') {
			type = iTunesItem.kind
		}

		switch (type) {
			case 'feature-movie':
				return new Movie(iTunesItem)
			case 'podcast':
				return new Podcast(iTunesItem)
			case 'song':
				return new Music(iTunesItem)
			case 'music-video':
				return new MusicVideo(iTunesItem)
			case 'audiobook':
				return new Audiobook(iTunesItem)
			case 'software':
				return new Software(iTunesItem)
			case 'tv-episode':
				return new TvShow(iTunesItem)
			case 'ebook':
				return new EBook(iTunesItem)
			default:
				console.error(`Unknown type: ${type}`)
				return null
		}
	}
}
