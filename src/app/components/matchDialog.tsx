import { Avatar, Button, Dialog, Flex, Text } from "@radix-ui/themes"
import { Dog } from "../constants"
import { HeartFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface MatchDialogProps {
  favorites: Dog[]
}

export const MatchDialog = ({ favorites }: MatchDialogProps) => {
  const [matchedIndex, setMatchedIndex] = useState(0)
  return <Dialog.Root>
    <Dialog.Trigger>
      <Button disabled={favorites.length < 1} onClick={() => setMatchedIndex(Math.floor(Math.random() * favorites.length))}>Get my match</Button>
    </Dialog.Trigger>

    <Dialog.Content maxWidth="450px">
      <Dialog.Title>We found your new best friend!</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Their tail is already wagging just thinking about you.
      </Dialog.Description>

      <Flex direction="column" gap="3" align="center" style={{ margin: '8px 0' }}>
        <Avatar size="9" src={favorites[matchedIndex]?.img} fallback={<HeartFilledIcon />} />
        <Text as="div">
          {`${favorites[matchedIndex]?.name}, ${favorites[matchedIndex]?.age}, likes long walks on the beach, in the woods, and around the block. 
          They would like at least ${Math.floor(Math.random() * 998) + 2} pets per day. 
          ${favorites[matchedIndex]?.name}'s snuggle-to-pets exchange rate is 1 snuggle per ${Math.floor(Math.random() * 18) + 3} pets.`}
        </Text>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button>Woof</Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  </Dialog.Root>
}