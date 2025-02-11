import { HeartIcon } from "@radix-ui/react-icons"
import { Flex, Strong, Text } from "@radix-ui/themes"

export const EmptyFavorites = () => {
  return <Flex direction='column' align="center" justify="center" style={{ margin: "auto", maxWidth: "400px", height: "80vh", textAlign: "center" }}>
    <Text as="span" color="amber">
      Click <HeartIcon /> to pick your favorite dogs. {`\n`}
    </Text>
    <Text as="span" color="amber">
      When you&apos;re done, click <Strong>Get my match</Strong> at the top of the page to see who your new best friend is.
    </Text>
  </Flex>
}

export const EmptyAvailable = () => {
  return <Flex direction='column' align="center" justify="center" style={{ margin: "auto", maxWidth: "400px", height: "80vh", textAlign: "center" }}>
    <Text as="span" color="amber">
      We&apos;re so sorry.
    </Text>
    <Text as="span" color="amber">
      We can&apos;t find any available dogs right now.
    </Text>
  </Flex>
}