'use client'

import { Box, Button, Flex, Heading, TextField } from "@radix-ui/themes"
import { useState } from "react"
import { login } from "../helpers"

interface LoginViewProps {
  setIsAuthed: (isAuthed: boolean) => void
}

export const LoginView = ({ setIsAuthed }: LoginViewProps) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onLogin = () => {
    //TODO name and email validation
    login(name, email).then(() => setIsAuthed(true))
    //TODO failed login errors
  }

  return (
    <Flex direction='column' gap='2' align='center' justify='center' minHeight='100vh'>
      <Heading>Fetch your new best friend</Heading>
      <Box minWidth="250px">
        <TextField.Root placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </Box>
      <Box minWidth="250px">
        <TextField.Root placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Button size="3" onClick={onLogin}>Login</Button>
    </Flex>
  )
}