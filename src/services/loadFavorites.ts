import { Book } from "../types"

const FAVORITES_KEY = "favorites"

export const loadFavorites = (): Book[] => {
  const savedFavorites = localStorage.getItem(FAVORITES_KEY)
  return savedFavorites ? JSON.parse(savedFavorites) : []
}

export const saveFavorites = (favorites: Book[]) => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}
