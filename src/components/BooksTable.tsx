import React, { useState } from "react"
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    ColumnDef,
    flexRender,
} from "@tanstack/react-table"
import { Book, BooksTableProps } from "../types"
import { BookModal } from "./BookModal"
import { toggleFavorite } from "../slices/booksSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { Button } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"


export const BooksTable: React.FC<BooksTableProps> = ({ books }) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: RootState) => state.books.favorites)

    const [selectedBook, setSelectedBook] = useState<Book | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = async (bookUrl: string) => {
        try {
            const response = await fetch(bookUrl)
            const data: Book = await response.json()
            setSelectedBook(data)
            setIsModalOpen(true)
        } catch (error) {
            console.log("Error fetching book details", error)
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedBook(null)
    }

    const isFavorite = (book: Book) => favorites.some((b) => b.url === book.url)

    const columns: ColumnDef<Book>[] = [
        {
            accessorKey: "name",
            header: ({ column }) => (
                <button onClick={() => column.toggleSorting()} className="cursor-pointer">
                    TITLE {column.getIsSorted() === "asc" ? "⬆️" : column.getIsSorted() === "desc" ? "⬇️" : "↕️"}
                </button>
            ),
            cell: (info) => {
                const title = info.getValue() as string
                return (
                    <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">{title}</span>
                )
            }
        },
        {
            header: "Author(s)", id: "authors", accessorFn: (row) => row.authors,
            cell: (info) => {
                const value = info.getValue() as string[]
                return value.join(", ")
            }
        },
        {
            accessorKey: "numberOfPages",
            header: ({ column }) => (
                <button onClick={() => column.toggleSorting()}>
                    PAGES {column.getIsSorted() === "asc" ? "⬆️" : column.getIsSorted() === "desc" ? "⬇️" : "↕️"}
                </button>
            )
        },
        {
            header: "Details", id: "url", accessorFn: (row) => row.url,
            cell: (info) => {
                const url = info.getValue() as string
                return (
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        openModal(url)
                    }} 
                    target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Book Details
                    </a>
                )
            }
        },
        {
            header: "Favorite",
            id: "favorite",
            cell: ({ row }) => {
                const book = row.original
                return (
                    <Button onClick={() => dispatch(toggleFavorite(book))} className="rounded-full cursor-pointer">
                        <StarIcon className={`w-6 h-6 ${isFavorite(book) ? "text-yellow-500" : "text-gray-400"}`} />
                    </Button>
                )
            }
        }
    ]

    const table = useReactTable({
        data: books,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(), // Habilita el ordenamiento
    })


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="px-6 py-3">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-6 py-4">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <BookModal isOpen={isModalOpen} book={selectedBook} onClose={closeModal} />
        </>
    )
}
