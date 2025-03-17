import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { BookFormProps, NewBook } from "../types"
import { Link } from "react-router-dom"
import { Button } from "@headlessui/react"

export const BookForm = ({ onSubmit, initialValues }: BookFormProps & { initialValues?: NewBook }) => {

    const defaultValues: NewBook = {
        name: "",
        author: "",
        gender: "",
        released: ""
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("The name is required"),
        author: Yup.string().required("The author is required"),
        gender: Yup.string().required("The gender is required"),
        released: Yup.string().required("The released is required")
    })


    return (
        <>
            
            <Formik initialValues={initialValues || defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    
                    <Form className="flex flex-col gap-4 p-4 rounded-lg w-1/3 bg-gray-900">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="b-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl uppercase text-center">Add New Book</h2>
                            <Link to="/">
                                <Button className="w-max cursor-pointer rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                    🏠 Return Home
                                </Button>
                            </Link>
                        </div>
                        <label>Book Name</label>
                        <Field type="text" name="name" className="border p-2 rounded" />
                        <ErrorMessage name="name" component="div" className="text-red-500" />

                        <label>Author</label>
                        <Field type="text" name="author" className="border p-2 rounded" />
                        <ErrorMessage name="author" component="div" className="text-red-500" />

                        <label>Book Genre</label>
                        <Field type="text" name="gender" className="border p-2 rounded" />
                        <ErrorMessage name="gender" component="div" className="text-red-500" />

                        <label>Publication Date</label>
                        <Field type="text" name="released" className="border p-2 rounded" />
                        <ErrorMessage name="released" component="div" className="text-red-500" />

                        <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded">
                            {isSubmitting ? "Saving..." : "Saved Book"}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
