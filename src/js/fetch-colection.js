import axios from 'axios';

const API_KEY = '778514cd0c35430bd38f659c52db3e68';
const BASE_URL = 'https://api.themoviedb.org/';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    if (!this.searchQuery.length)
      return Promise.reject('Enter data to search.');
    const response = await axios.get(
      `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    if (!response.data.results.length)
      return Promise.reject(
        'Search result not successful. Enter the correct movie name .'
      );

    return response.data;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}