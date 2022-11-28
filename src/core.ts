const googleSearch = "https://www.google.com/search"



function searchWithSearchEngine(s: string) {
    const url = new URL(googleSearch)
    url.searchParams.append("q",s)
    location.assign(url)
}


export {
    searchWithSearchEngine
}
