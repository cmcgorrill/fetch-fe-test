'use client'

import { useEffect, useState } from "react"
import { API_URL, Dog } from "../constants"

export const useDogs = (isAuthed: boolean) => {
  const [dogs, setDogs] = useState<Dog[]>([])

  useEffect(() => {
    console.log('is authed', isAuthed)
    if (isAuthed) {
      fetchDogs().then((res) => {
        res.json().then((data) => { console.log('dogs?:', data) })
      })
    }
  }, [isAuthed])

  return { dogs, setDogs }
}

const fetchDogs = () => {
  return fetch(`${API_URL}/dogs/search`, {
    method: 'GET',
    credentials: 'include'
  })
}