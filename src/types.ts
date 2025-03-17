import { FormikHelpers } from "formik"


export interface Book {
    url: string
    name: string
    isbn: string
    authors: string[]
    numberOfPages: number
    publisher: string
    country: string
    mediaType: string
    released: string
    povCharacters: string[]
}

export interface BooksState {
    books: Book[]
    filteredBooks: Book[]
    favorites: Book[]
}

export interface BooksTableProps {
    books: Book[]
}

// Interface de Props para el Modal
export interface ModalProps {
    isOpen: boolean
    book: Book | null
    onClose: () => void
}

// Interface de Personaje
export interface Character {
    name: string
    gender: string
    culture: string
    born: string
    titles: string[]
    tvSeries: string[]
    playedBy: string[]
}

export interface BookFormProps {
    onSubmit: (values: NewBook, formikHelpers: FormikHelpers<NewBook>) => void;
}

export interface NewBook {
    name: string
    author: string
    gender: string
    released: string
}