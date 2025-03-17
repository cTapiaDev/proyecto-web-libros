import { Meta, StoryObj } from "@storybook/react";
import { BookFormProps, NewBook } from "../types";
import { BookForm } from "./BookForm";
import { MemoryRouter } from "react-router-dom";


const mockOnSubmit: BookFormProps["onSubmit"] = async (values, { setSubmitting }) => {
    console.log("Submitted values: ", values)
    setTimeout(() => {
        setSubmitting(false)
    }, 1000)
}

const meta: Meta<typeof BookForm> = {
    title: "Components/BookForm",
    component: BookForm,
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
    argTypes: {
        onSubmit: { action: "submitted" },
    }
}

export default meta
type Story = StoryObj<typeof BookForm>

export const Default: Story = {
    args: {
        onSubmit: mockOnSubmit
    }
}

export const Prefilled: Story = {
    args: {
        onSubmit: mockOnSubmit,
        initialValues: {
            name: "A Game of Thrones",
            author: "George R. R. Martin",
            gender: "Fantasy",
            released: "1996-08-06"
        } as NewBook
    },
}