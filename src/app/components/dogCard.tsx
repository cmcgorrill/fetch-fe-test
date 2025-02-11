import { Avatar, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { Dog } from "../constants"
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"

interface DogCardProps {
  dog: Dog,
  onButtonClick: () => void
}

export const DogCard = ({ dog, onButtonClick }: DogCardProps) => {
  return (
    <Card>
      <Flex gap="4" minWidth="200px" justify="between" align="center">
        <Flex gap="4">
          <Avatar src={dog.img} size="8" fallback={dog.name.charAt(0)} />
          <Flex direction="column" gap="1" justify='center'>
            <Heading size='4'>{dog.name}</Heading>
            <Text as="span">Age: {dog.age}</Text>
            <Text as="span">Breed: {dog.breed}</Text>
            {/* //NICETOHAVE parse zip code to city/state location */}
            <Text as="span">Location: {dog.zip_code}</Text>
          </Flex>
        </Flex>
        <Button onClick={onButtonClick}>{dog.favorited ? <HeartFilledIcon /> : <HeartIcon />}</Button>
      </Flex>
    </Card >)
}