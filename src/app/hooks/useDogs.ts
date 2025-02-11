import { useEffect, useState } from "react"
import { API_URL, Dog, exampleDogData } from "../constants"

export const useDogs = (isAuthed: boolean) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [currentDogs, setCurrentDogs] = useState<Dog[]>(exampleDogData[currentPage])
  const [allDogs, setAllDogs] = useState<Dog[][]>(exampleDogData)
  const [favorites, setFavorites] = useState<Dog[]>([])

  const onNext = () => {
    if (currentPage < 3) {
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      setCurrentDogs(allDogs[newPage])
    }
  }

  const onPrev = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      setCurrentDogs(allDogs[newPage])
    }
  }

  const onFavoriteToggle = (dog: Dog, index: number) => {
    if (dog.favorited) {
      setFavorites(favorites.slice(0, index).concat(favorites.slice(index + 1, favorites.length)))
      const updatedDogs = currentDogs.map((d) => d.id === dog.id ? { ...dog, favorited: false } : d)
      setCurrentDogs(updatedDogs)
      setAllDogs(allDogs.map((dogPage, index) => index === currentPage ? updatedDogs : dogPage))

    } else {
      setFavorites(favorites.concat({ ...dog, favorited: true }))
      const updatedDogs = currentDogs.map((d) => d.id === dog.id ? { ...dog, favorited: true } : d)
      setCurrentDogs(updatedDogs)
      setAllDogs(allDogs.map((dogPage, index) => index === currentPage ? updatedDogs : dogPage))

    }
  }

  useEffect(() => {
    if (isAuthed) {
      fetchDogs().then((res) => {
        //TODO after fixing cookie issue...
        //use dog IDs to get dog data
        //set dog data to list
        res.json().then((data) => { console.log('dogs?:', data) })
      })
    }
  }, [isAuthed])

  return { dogs: currentDogs, favorites, onFavoriteToggle, hasPrev: currentPage > 0, hasNext: currentPage < 3, onNext, onPrev }
}

const fetchDogs = () => {
  //PROBLEM: httpOnly cookie is not being included in requests, so they are failing
  //with '401 Unauthorized'. Continued to work using example data fetched in postman.
  return fetch(`${API_URL}/dogs/search`, {
    method: 'GET',
    credentials: 'include',
  })
}