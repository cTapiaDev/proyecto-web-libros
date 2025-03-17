import {
    Dialog,
    Transition,
    DialogTitle,
    DialogPanel,
    Description,
    DisclosureButton,
    Disclosure,
    DisclosurePanel,
} from "@headlessui/react"
import { Character, ModalProps } from "../types"
import { Fragment, useCallback, useEffect, useState } from "react"
import { fetchCharacters } from "../services/api"
import { ChevronDownIcon } from '@heroicons/react/20/solid';


export const BookModal = ({ isOpen, book, onClose }: ModalProps) => {

    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const fetchDataCharacters = useCallback(async () => {
        if (!book?.povCharacters || book.povCharacters.length === 0) return
        setLoading(true)

        try {
            console.log(book.povCharacters)

            const responses = await Promise.all(
                book.povCharacters.map(async (url) => {
                    const characterData = await fetchCharacters(url)
                    console.log("data: ", characterData)
                    return characterData
                })
            )
            setCharacters(responses)
        } catch (error) {
            console.error("Error loading characters: ", error)
        } finally {
            setLoading(false)
        }
    }, [book])

    useEffect(() => {
        if (isOpen) {
            fetchDataCharacters()
        } else {
            setCharacters([])
        }
    }, [isOpen, fetchDataCharacters])

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => { }} static>
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                    <div className="fixed inset-0 flex items-center justify-center">
                        <DialogPanel className="relative bg-gray-900 text-white rounded-lg p-6 shadow-lg w-1/3 max-h-[80vh] overflow-y-auto">
                            <DialogTitle className="text-xl font-bold">{book?.name}</DialogTitle>
                            <Description><p>{book?.publisher} - {book?.mediaType} - {book?.country}</p></Description>

                            <hr className="my-4 border-gray-300" />
                            <div className="mt-2">
                                <p><strong>ISBN Code: </strong>{book?.isbn}</p>
                                <p><strong>Author: </strong>{book?.authors.join(", ") || "Unknown"}</p>
                                <p><strong>Pages: </strong>{book?.numberOfPages}</p>
                                <p><strong>Released: </strong>{book?.released}</p>
                            </div>

                            <hr className="my-4 border-gray-300" />

                            <div className="mt-4">
                                <h3 className="font-bold text-lg">Main Characters:</h3>
                                {loading ? (
                                    <p className="text-gray-500">Loading...</p>
                                ) : (
                                    <div className="mt-2">
                                        {characters.length > 0 ? (
                                            characters.map((char) => (
                                                <Disclosure as="div" className="py-2">
                                                    <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                                                        <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                                                            {char.name}
                                                        </span>
                                                        <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                                                    </DisclosureButton>
                                                    <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                                                        <ul className="list-disc list-inside">
                                                            <li><strong>Gender: </strong>{char.gender}</li>
                                                            <li><strong>Culture: </strong>{char.culture}</li>
                                                            <li><strong>Born: </strong>{char.born}</li>
                                                            <li><strong>Titles: </strong>{char.titles.join(", ") || "Unknown"}</li>
                                                            <li><strong>Seasons Series: </strong>{char.tvSeries.join(" - ") || "Unknown"}</li>
                                                            <li><strong>Actor: </strong>{char.playedBy.join("") || "Unknown" }</li>
                                                        </ul>
                                                    </DisclosurePanel>
                                                </Disclosure>
                                            ))
                                        ) : (
                                            <p className="text-gray-500">There are no main characters.</p>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button
                                className="absolute top-0 right-0 mt-4 bg-transparent text-white px-4 py-2 rounded cursor-pointer"
                                onClick={onClose}
                            >
                                ❌
                            </button>
                        </DialogPanel>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
