import { BooksTable } from "../components/BooksTable"
import { Book } from "../types"
import { Provider } from "react-redux"
import { store } from "../store"
import { MemoryRouter } from "react-router-dom"
import type { Meta, StoryObj } from "@storybook/react"



const meta: Meta<typeof BooksTable> = {
    title: "Components/BooksTable",
    component: BooksTable,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </Provider>
        )
    ]
}

export default meta
type Story = StoryObj<typeof BooksTable>

const mockBooks: Book[] = [
    {
        name: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        numberOfPages: 310,
        url: "https://example.com/hobbit",
        isbn: "",
        publisher: "",
        country: "",
        mediaType: "",
        released: "",
        povCharacters: []
    },
    {
        name: "1984",
        authors: ["George Orwell"],
        numberOfPages: 328,
        url: "https://example.com/1984",
        isbn: "",
        publisher: "",
        country: "",
        mediaType: "",
        released: "",
        povCharacters: []
    },
]

export const Default: Story = {
    args: {
        books: mockBooks
    }
}