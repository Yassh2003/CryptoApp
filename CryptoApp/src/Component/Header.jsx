import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HStack p= {"4"} shadow={"base"} bgColor={"blackAlpha.900"} pos={"sticky"} top="0" left="0">
      <Button variant={"unstyled"} color={"white"} marginRight={"8"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} marginRight={"8"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header