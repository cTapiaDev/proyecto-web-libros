import { Book } from "../types"

export const fetchBooksFromAPI = async () => {
    try {
        const response = await fetch('https://anapioficeandfire.com/api/books')
        if (!response.ok) throw new Error('Error getting books')
        const data = await response.json()

        return data.map((item: Book) => ({
            url: item.url,
            name: item.name,
            authors: item.authors,
            numberOfPages: item.numberOfPages
        }))
    } catch (error) {
        console.log("Error loading books: ", error)
        return []
    }
}

export const fetchCharacters = async (url: string) => {
    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Error getting character')
        const data = await response.json()

        return data
    } catch (error) {
        console.log("Error loading character: ", error)
        return []
    }
}