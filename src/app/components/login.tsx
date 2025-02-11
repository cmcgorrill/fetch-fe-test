'use client'

import { Box, Button, Flex, Heading, TextField, Text } from "@radix-ui/themes"
import { useState } from "react"
import { login } from "../helpers"
import { EMAIL_REGEX } from "../constants"

interface LoginViewProps {
  setIsAuthed: (isAuthed: boolean) => void
}

export const LoginView = ({ setIsAuthed }: LoginViewProps) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [nameError, setNameError] = useState<string | undefined>(undefined)
  const [emailError, setEmailError] = useState<string | undefined>(undefined)

  const onLogin = () => {
    const nameIsValid = validateName()
    const emailIsValid = validateEmail()
    if (nameIsValid && emailIsValid) {
      login(name, email).then(() => setIsAuthed(true))
    }
  }

  const validateName = () => {
    if (name.length > 0) {
      setNameError(undefined)
      return true
    } else {
      setNameError('Name cannot be blank')
      return false
    }
  }

  const validateEmail = () => {
    if (email.length > 0) {
      setNameError(undefined)
      if (email.toLowerCase().match(EMAIL_REGEX)) {
        return true
      } else {
        setEmailError('Email must be in the correct format. Example: spot@doggo.com')
      }
    } else {
      setEmailError('Email cannot be blank')
      return false
    }
  }

  return (
    <Flex direction='column' gap='2' align='center' justify='center' minHeight='100vh'>
      <Heading>Fetch your new best friend</Heading>
      <Box minWidth="250px">
        <TextField.Root placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </Box>
      <Text as="span" size="1" hidden={nameError === undefined}>{nameError}</Text>

      <Box minWidth="250px">
        <TextField.Root placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Box>
      <Text as="span" size="1" hidden={emailError === undefined}>{emailError}</Text>

      <Button size="3" onClick={onLogin}>Login</Button>
    </Flex>
  )
}