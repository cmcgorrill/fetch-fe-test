import { useDogs } from "../hooks/useDogs"
import { Box, Button, Container, Flex, Grid, Heading } from "@radix-ui/themes"
import { DogCard } from "./dogCard"
import { Dog } from "../constants"
import { MatchDialog } from "./matchDialog"
import { EmptyAvailable, EmptyFavorites } from "./emptyStates"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

interface DogPickerProps {
  isAuthed: boolean
}

export const DogPicker = ({ isAuthed }: DogPickerProps) => {
  const { dogs, favorites, onFavoriteToggle, hasNext, hasPrev, onNext, onPrev } = useDogs(isAuthed)

  return <Container style={{ overflow: "hidden" }}>
    <Grid columns="2" gap="8">
      <Container>
        <DogList title="Available dogs" dogs={dogs} onFavoriteToggle={onFavoriteToggle} />
        <Flex justify="between" style={{ margin: "12px" }}>
          <Button disabled={!hasPrev} onClick={onPrev}><ChevronLeftIcon /></Button>
          <Button disabled={!hasNext} onClick={onNext}><ChevronRightIcon /></Button>
        </Flex>
      </Container>
      <Container>
        <DogList title="Favorite dogs" dogs={favorites} onFavoriteToggle={onFavoriteToggle} isFavoritesList={true} />
      </Container>
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
  return <Box>
    <Flex align="center" justify="between" style={{ margin: '24px 12px' }}>
      <Heading>{title}</Heading>
      {isFavoritesList && <MatchDialog favorites={dogs} />}
    </Flex>
    {/* TODO filters and sorting not possible without the api calls working */}
    {/* (technically it's possible client side, but that feels too hacky right now) */}
    <Box style={{
      overflowY: "auto",
      height: "80vh",
      padding: "0 12px"
    }}>
      <Flex direction="column" gap="2" >
        {dogs.length < 1 ? (isFavoritesList ? <EmptyFavorites /> : <EmptyAvailable />) : dogs.map((dog: Dog, index: number) => <DogCard key={index} dog={dog} onButtonClick={() => onFavoriteToggle(dog, index)} />)}
      </Flex>
    </Box>
  </Box >
}