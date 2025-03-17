import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Book, BooksState } from "../types"
// import { loadFavorites, saveFavorites } from "../services/loadFavorites"



const initialState: BooksState = {
    books: [],
    filteredBooks: [],
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]")
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload)
        },
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload
            state.filteredBooks = action.payload
        },
        setFilteredBooks: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase()
            state.filteredBooks = state.books.filter((book) => 
                book.name.toLocaleLowerCase().includes(searchTerm) ||
                book.authors.some((author) =>
                    author.toLowerCase().includes(searchTerm)
                )
            )
        },
        toggleFavorite: (state, action: PayloadAction<Book>) => {
            const book = action.payload
            const index = state.favorites.findIndex((b) => b.url === book.url)
            if (index === -1) {
                state.favorites.push(book)
            } else {
                state.favorites.splice(index, 1)
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        }
    },
})

export const { addBook, setBooks, setFilteredBooks, toggleFavorite } = booksSlice.actions
export default booksSlice.reducer