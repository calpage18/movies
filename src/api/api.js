const apiKey = '5788f8febde5fe572a46c761f8e1dd78'
const baseSearchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false`
const baseBrowseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&region=GB&include_video=false`

export function searchMovies ({searchTerm, pageNumber}) {
  const encodedSearchTerm = encodeURIComponent(searchTerm)
  let searchURL = `${baseSearchURL}&query=${encodedSearchTerm}`
  if (pageNumber) {
    searchURL += `&page=${pageNumber}`
  }
  return fetch(searchURL) // eslint-disable-line
    .then(response => {
      return response.json()
    })
}

export function browseMovies () {
  const URL = `${baseBrowseURL}&sort_by=release_date.desc&release_date.lte=${Date.now()}&vote_count.gte=100`

  return fetch(URL) // eslint-disable-line
    .then(response => {
      return response.json()
    })
}
