import { use, useEffect } from "react"
import { useDogs } from "../hooks/useDogs"
import { Box, Button, Container, Flex, Grid, Heading, Section } from "@radix-ui/themes"
import { DogCard } from "./dogCard"
import { Dog } from "../constants"

interface DogPickerProps {
  isAuthed: boolean
}

export const DogPicker = ({ isAuthed }: DogPickerProps) => {
  const { dogs } = useDogs(isAuthed)
  useEffect(() => {
    console.log(dogs)
  }, [dogs])
  return <Container style={{ overflow: "hidden" }}>
    <Grid columns="2" gap="8">
      <DogList title="Available dogs" dogs={dogs} />
      <DogList title="Favorited dogs" dogs={dogs.filter((dog) => dog.favorited)} useCTA={true} />
    </Grid>
  </Container>
}

interface DogListProps {
  title: string,
  dogs: Dog[],
  useCTA?: boolean
}

const DogList = ({ title, dogs, useCTA = false }: DogListProps) => {
  return <Container className="">
    <Flex align="center" justify="between" style={{ margin: '24px 12px' }}>
      <Heading>{title}</Heading>
      {useCTA && <Button>Get my match</Button>}
    </Flex>
    <Box style={{
      overflowY: "auto",
      height: "100vh",
      padding: "0 12px"
    }}>
      <Flex direction="column" gap="2" >
        {dogs.map((dog: Dog) => <DogCard key={dog.id} dog={dog} />)}
      </Flex>
    </Box>

  </Container >
}