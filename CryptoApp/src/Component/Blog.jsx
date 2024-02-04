import React from 'react'
import { Button, Container, HStack, Box } from '@chakra-ui/react'
import bgSrc from "../assets/bg.png";

function Blog() {
  return (
    <Box w='100%' h='400px' bgImage={bgSrc} bgRepeat="no-repeat" bgSize={"100%"}>
    </Box>
  )
}

export default Blog