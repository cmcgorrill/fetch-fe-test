'use client'

import { useEffect, useState } from "react";
import { LoginView } from "./components/login";
import { Box } from "@radix-ui/themes";
import { DogList } from "./components/dogList";

export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)

  useEffect(() => {
  }, [isAuthed])
  return (
    <Box>
      {isAuthed ? <DogList isAuthed={isAuthed} /> : <LoginView setIsAuthed={setIsAuthed} />}
    </Box>
  );
}
