/** @format */

import MediaFactory from '@/models/MediaFactory'
import axios from 'axios'

export default class ITunesApiService {
	static async search({
		term,
		country = 'US',
		media = 'all',
		entity = '',
		attribute = '',
		limit = 36,
		lang = 'en_us',
		explicit = 'Yes',
	}) {
		let results = []

		// Encode the search term to handle special characters and spaces
		const encodedTerm = encodeURIComponent(term)

		try {
			const params = new URLSearchParams({
				term: encodedTerm,
				country,
				media,
				entity,
				attribute,
				limit,
				lang,
				explicit,
			}).toString()

			const response = await axios.get(`https://itunes.apple.com/search?${params}`)

			if (response.data && response.data.results) {
				response.data.results.forEach((result) => {
					const media = MediaFactory.createMedia(result)
					if (media) {
						results.push(media)
					}
				})
			}
		} catch (error) {
			console.error('Search failed:', error)
			// Depending on how you want to handle errors, you could throw an error or return an empty array here
		}

		return results
	}
}
