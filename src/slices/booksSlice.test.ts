import booksReducer, { setBooks, setFilteredBooks } from "../slices/booksSlice"
import { Book, BooksState } from "../types"


describe("booksSlice reducer", () => {
    const mockBooks: Book[] = [
        {
            url: "https://anapioficeandfire.com/api/books/1",
            name: "A Game of Thrones",
            isbn: "978-0553103540",
            authors: ["George R. R. Martin"],
            numberOfPages: 694,
            publisher: "Bantam Books",
            country: "United States",
            mediaType: "Hardcover",
            released: "1996-08-06T00:00:00",
            povCharacters: [
                "https://anapioficeandfire.com/api/characters/1",
                "https://anapioficeandfire.com/api/characters/2",
            ],
        },
        {
            url: "https://anapioficeandfire.com/api/books/2",
            name: "A Clash of Kings",
            isbn: "978-0553108033",
            authors: ["George R. R. Martin"],
            numberOfPages: 768,
            publisher: "Bantam Books",
            country: "United States",
            mediaType: "Hardcover",
            released: "1998-11-16T00:00:00",
            povCharacters: [
                "https://anapioficeandfire.com/api/characters/5",
                "https://anapioficeandfire.com/api/characters/8",
            ],
        }
    ]

    it("should handle setBooks", () => {
        const state = booksReducer(undefined, setBooks(mockBooks))
        expect(state.books).toEqual(mockBooks)
    })

    it("should handle setFilteredBooks", () => {
        const initialState: BooksState = {
            books: mockBooks,
            filteredBooks: [],
            favorites: []
        }

        const state = booksReducer(initialState, setFilteredBooks("A Game of Thrones"))
        expect(state.filteredBooks).toEqual([mockBooks[0]])
    })
})