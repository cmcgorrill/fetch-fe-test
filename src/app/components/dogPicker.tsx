import { useDogs } from "../hooks/useDogs"
import { Box, Button, Container, Flex, Grid, Heading } from "@radix-ui/themes"
import { DogCard } from "./dogCard"
import { Dog } from "../constants"

interface DogPickerProps {
  isAuthed: boolean
}

export const DogPicker = ({ isAuthed }: DogPickerProps) => {
  const { dogs, favorites, onFavoriteToggle } = useDogs(isAuthed)

  return <Container style={{ overflow: "hidden" }}>
    <Grid columns="2" gap="8">
      <DogList title="Available dogs" dogs={dogs} onFavoriteToggle={onFavoriteToggle} />
      <DogList title="Favorited dogs" dogs={favorites} onFavoriteToggle={onFavoriteToggle} isFavoritesList={true} />
    </Grid>
  </Container>
}

interface DogListProps {
  title: string,
  dogs: Dog[],
  onFavoriteToggle: (dog: Dog, index: number) => void
  isFavoritesList?: boolean
}

const DogList = ({ title, dogs, onFavoriteToggle, isFavoritesList = false }: DogListProps) => {
  return <Container className="">
    <Flex align="center" justify="between" style={{ margin: '24px 12px' }}>
      <Heading>{title}</Heading>
      {isFavoritesList && <Button>Get my match</Button>}
    </Flex>
    {/* TODO filters and sorting not possible without the api calls working */}
    {/* (technically it's possible client side, but that feels too hacky right now) */}
    <Box style={{
      overflowY: "auto",
      height: "80vh",
      padding: "0 12px"
    }}>
      <Flex direction="column" gap="2" >
        {/* DONOW empty list states */}
        {dogs.map((dog: Dog, index: number) => <DogCard key={index} dog={dog} onButtonClick={() => onFavoriteToggle(dog, index)} />)}
      </Flex>
    </Box>

  </Container >
}