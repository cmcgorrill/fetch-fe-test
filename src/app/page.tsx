'use client'

// import { useEffect, useState } from "react";
// import { LoginView } from "./components/login";
import { Box } from "@radix-ui/themes";
import { DogPicker } from "./components/dogPicker";

export default function Home() {
  // const [isAuthed, setIsAuthed] = useState<boolean>(false)
  // DONOW - connect flows to mimic a demo of full flow
  return (
    <Box>
      {/* {isAuthed ? <DogPicker isAuthed={isAuthed} /> : <LoginView setIsAuthed={setIsAuthed} />} */}
      <DogPicker isAuthed={true} />
    </Box>
  );
}
