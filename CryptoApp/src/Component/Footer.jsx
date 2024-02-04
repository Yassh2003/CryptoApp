import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

import photoSrc from "../assets/photo.png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Introducing CryptoNest, your all-in-one solution for managing and securing your digital assets. With a sleek interface, real-time market data, and robust security features, CryptoNest makes crypto management a breeze. Instant transactions, multi-wallet support, and personalized alerts ensure you stay ahead in the fast-paced world of cryptocurrencies. Download CryptoNest now and experience the future of hassle-free crypto management.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={photoSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;