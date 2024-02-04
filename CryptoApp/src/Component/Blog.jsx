import React from 'react'
import {VStack, Box, Text, Image, HStack} from '@chakra-ui/react'
import bgSrc from "../assets/bg.png";
import blogSrc from "../assets/blogPic.png";
import blog2Src from "../assets/blogPic2.png";

function Blog() {
  return (
    <Box w='100%' minH='100vh' bgColor={"#2D3748"}>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"}>
        <VStack justifyContent={"center"}>
          <Text fontSize={"4xl"} color={"white"} fontFamily={"sans-serif"} fontWeight={"800"}>
            Crypto Live Market Price
          </Text>
          <Text color={"white"} fontStyle={"oblique"} fontWeight={"600"}>
            100% Safe with FIU-complaint
          </Text>
        </VStack>
        <Image src={blogSrc} w={{base:"90%",md:"40vw"}} h={{base:"40vh",md:"68vh"}} marginTop={"20px"} borderRadius={"20px"}/>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"}>
        <Image src={blog2Src}  w={{base:"90%",md:"40vw"}} h={{base:"40vh",md:"68vh"}} marginTop={"40px"} borderRadius={"20px"}/>
        <VStack w={{base:"90%",md:"40vw"}} marginTop={"40px"} >
        <Text fontSize={"sm"} marginTop={"17px"} fontWeight={"800"} color={"wheat"}>
        ➼ The future of cryptocurrency holds a complex interplay of regulatory developments, technological advancements, and market trends. As governments increasingly seek to regulate the industry, achieving a balance between oversight and fostering innovation will be crucial. The integration of cryptocurrencies into traditional finance, driven by growing institutional interest, could lead to a more mainstream acceptance. Continued advancements in blockchain technology, addressing scalability issues and improving interoperability, may pave the way for new use cases and increased adoption.
        </Text> 
        <Text fontSize={"sm"} marginTop={"20px"} fontWeight={"800"} color={"wheat"}>
        ➼ The decentralized finance (DeFi) space is likely to expand, offering alternative financial services. Non-fungible tokens (NFTs) are expected to persist as a transformative force, extending beyond art into various industries. Environmental concerns, especially related to the energy consumption of certain cryptocurrencies, may drive a shift towards more sustainable consensus mechanisms.
        </Text>
        </VStack>
      </Box>
      <Text textAlign={"center"} marginTop={"40px"} fontWeight={"800"} color={"beige"}>
          Crypto products and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transcations.
      </Text>
    </Box>
  )
}

export default Blog