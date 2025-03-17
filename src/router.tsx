import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { AddBook } from "./pages/AddBook"
import { FavoritesPage } from "./pages/FavoritesPage"


export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Router>
    )
}