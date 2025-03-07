'use client'

import { useState } from "react";
import { LoginView } from "./components/login";
import { Box } from "@radix-ui/themes";
import { DogPicker } from "./components/dogPicker";

export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  return (
    <Box>
      {isAuthed ? <DogPicker isAuthed={isAuthed} /> : <LoginView setIsAuthed={setIsAuthed} />}
    </Box>
  );
}
