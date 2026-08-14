import { ColorModeProvider } from "./components/ui/color-mode"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

export default function Layout({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}