import { useEffect } from "react"
import { useDogs } from "../hooks/useDogs"

interface DogListProps {
  isAuthed: boolean
}

export const DogList = ({ isAuthed }: DogListProps) => {
  const { dogs } = useDogs(isAuthed)
  useEffect(() => {
    console.log(dogs)
  }, [dogs])
  return <h1>Doggos plz</h1>
}