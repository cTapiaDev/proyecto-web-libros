import { FormikHelpers } from "formik"
import { BookForm } from "../components/BookForm"
import { NewBook } from "../types"

const handleAddBook = (
  values: NewBook,
  formikHelpers: FormikHelpers<NewBook>
) => {
  console.log("Book details: ", values)
  formikHelpers.resetForm()
}

export const AddBook = () => {
  return (
    <>
      <div className="w-full h-full relative bg-gray-900 text-white p-8 flex justify-center">
        <BookForm onSubmit={handleAddBook} />
      </div>
    </>
  )
}
