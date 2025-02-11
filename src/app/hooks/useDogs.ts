import { useEffect, useState } from "react"
import { API_URL, Dog, exampleDogData } from "../constants"

export const useDogs = (isAuthed: boolean) => {
  const [dogs, setDogs] = useState<Dog[]>(exampleDogData[0])
  const [favorites, setFavorites] = useState<Dog[]>([])

  const onFavoriteToggle = (dog: Dog, index: number) => {
    if (dog.favorited) {
      setDogs(dogs.map((d) => d.id === dog.id ? { ...dog, favorited: false } : d))
      setFavorites(favorites.slice(0, index).concat(favorites.slice(index + 1, favorites.length)))
    } else {
      setDogs(dogs.map((d) => d.id === dog.id ? { ...dog, favorited: true } : d))
      setFavorites(favorites.concat({ ...dog, favorited: true }))
    }
  }

  useEffect(() => {
    if (isAuthed) {
      fetchDogs().then((res) => {
        //PROBLEM: httpOnly cookie is not being included in requests, so they are failing
        //with '401 Unauthorized'. Continuing using example data fetched in postman.

        //TODO after fixing cookie issue...
        //use dog IDs to get dog data
        //set dog data to list
        res.json().then((data) => { console.log('dogs?:', data) })
      })
    }
  }, [isAuthed])

  return { dogs, favorites, onFavoriteToggle }
}

const fetchDogs = () => {
  return fetch(`${API_URL}/dogs/search`, {
    method: 'GET',
    credentials: 'include',
  })
}