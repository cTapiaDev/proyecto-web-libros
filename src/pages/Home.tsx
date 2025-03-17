import { useDispatch, useSelector } from "react-redux"
import { fetchBooksFromAPI } from "../services/api"
import { useEffect, useState } from "react"
import { setBooks, setFilteredBooks } from "../slices/booksSlice"
import { RootState } from "../store"
import { BooksTable } from "../components/BooksTable"
import { Button, Input } from '@headlessui/react'
import { Link } from "react-router-dom"

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: RootState) => state.books.filteredBooks)

  const [searchTerm, setSearchTerm] = useState<string>("")

  // Cargar la data desde la API
  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await fetchBooksFromAPI()
      dispatch(setBooks(booksData))
    }

    fetchBooks()
  }, [dispatch])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    dispatch(setFilteredBooks(value)) // Actualizamos el estado de Redux en tiempo real
  }

  return (
    <>
      <div className="w-full h-full relative bg-gray-900 text-white p-8">
        <div className="flex justify-between items-center">
          <h1 className="b-4 text-2xl pb-8 font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl uppercase">Book List</h1>
          <Link to="/favorites">
            <Button className="w-max ml-4 mb-3 cursor-pointer rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              🌟 See Favorites
            </Button>
          </Link>
        </div>
        <div className="w-full flex">
          <Input
            type="text"
            placeholder="Search book by name..."
            className="mb-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Link to="/add-book">
            <Button className="w-max ml-4 mb-3 cursor-pointer rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              ➕ New Book
            </Button>
          </Link>
        </div>

        {books.length > 0 ? (
          <BooksTable books={books} />
        ) : (
          <p>Not books found.</p>
        )}

      </div>
    </>
  )
}
