/** @format */

import axios from 'axios'
import MediaFactory from './MediaFactory'

export default class ItunesService {
	constructor() {
		this.baseUrl = 'https://itunes.apple.com/search'
	}

	async search(query, limit = 25) {
		try {
			const response = await axios.get(`${this.baseUrl}?term=${encodeURIComponent(query)}&limit=${limit}`)
			const results = response.data.results || []
			return results.map((item) => MediaFactory.createMedia(item))
		} catch (error) {
			console.error('Error during iTunes search:', error)
			throw error
		}
	}
}
