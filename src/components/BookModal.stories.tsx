import { Meta, StoryObj } from "@storybook/react"
import { ModalProps } from "../types"
import { BookModal } from "./BookModal"


const mockBook = {
    url: "https://example.com/book1",
    name: "A Game of Thrones",
    isbn: "978-0553103540",
    authors: ["George R. R. Martin"],
    numberOfPages: 694,
    publisher: "Bantam Spectra",
    country: "United States",
    mediaType: "Hardcover",
    released: "1996-08-06",
    povCharacters: [],
}

const mockProps: ModalProps = {
    isOpen: true,
    book: mockBook,
    onClose: () => alert("Closed")
}

const meta: Meta<typeof BookModal> = {
    title: "Components/BookModal",
    component: BookModal,
    args: mockProps
}

export default meta

type Story = StoryObj<typeof BookModal>

export const Default: Story = {
    args: {
        ...mockProps
    }
}

export const EmptyCharacters: Story = {
    args: {
        ...mockProps,
        book: { ...mockBook, povCharacters: [] }
    }
}