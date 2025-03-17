import { Link } from "react-router-dom"
import { BooksTable } from "../components/BooksTable"
import { RootState } from "../store"
import { useSelector } from "react-redux"
import { Button } from "@headlessui/react"


export const FavoritesPage = () => {

    const favorites = useSelector((state: RootState) => state.books.favorites)


    return (
        <>
            <div className="w-full h-full relative bg-gray-900 text-white p-8">
                <div className="flex justify-between items-center">
                    <h2 className="b-4 text-2xl pb-8 font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl uppercase">My Favorite Books</h2>
                    <Link to="/">
                        <Button className="w-max ml-4 mb-3 cursor-pointer rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            🏠 Return Home
                        </Button>
                    </Link>
                </div>
                <BooksTable books={favorites} />
            </div>
        </>
    )
}
