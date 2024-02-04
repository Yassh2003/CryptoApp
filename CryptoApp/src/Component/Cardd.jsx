import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup,
Button} from '@chakra-ui/react'
import Card1Src from "../assets/cardImg1.png";

function Cardd() {
  return (
<Card maxW={{base:"100%", md:"40vw"}} maxH={"80vh"} marginTop={"20px"} marginBottom={{base:"20px"}} borderWidth='10px'>
  <CardBody>
    <Image
    maxW={"17vw"}
    maxH={"30vh"}
    src={Card1Src}
      alt='Crypto Currency'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>History of Crypto</Heading>
      <Text fontSize={"small"}>
      ➼ Cryptocurrency emerged in 2009 with the introduction of Bitcoin, a decentralized digital currency created by the pseudonymous Satoshi Nakamoto. Bitcoin's innovative blockchain technology, emphasizing transparency and security, paved the way for numerous alternative cryptocurrencies.
      </Text>
      <Text fontSize={"small"}>
      ➼ The market witnessed a speculative boom in 2017, marked by Bitcoin's meteoric rise to nearly $20,000. Subsequent regulatory scrutiny and market corrections led to a prolonged 'crypto winter.'
      </Text>
    </Stack>
  </CardBody>
</Card>
  )
}

export default Cardd