const googleSearch = "https://www.google.com/search"


const urlTest = new RegExp(/(^(http|file|https)\:\/\/)?(([a-z0-9][a-z0-9\-_~\/:\?#\[\]@!$&\'\(\)\*+,;=]*)(\.[a-z0-9\-_~\/:\?#\[\]@!$&\'\(\)\*+,;=])+|(\/$))/g)
const protocolTest = new RegExp(/(^(http|file|https)\:\/\/)/g)

function searchWithSearchEngine(s: string) {

    if (urlTest.test(s)) {
        if (protocolTest.test(s)) {

            location.assign(s)
        } else {
            location.assign("https://" + s)
        }
        return
    }

    const url = new URL(googleSearch)
    url.searchParams.append("q", s)
    location.assign(url)
}


export {
    searchWithSearchEngine
}
