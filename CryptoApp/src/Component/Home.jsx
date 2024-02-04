import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";
import Card from "./Cardd";

const Home = () => {
  return (
    <Box  w={"full"} h={"full"} zIndex={"-1"} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>
      <VStack>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"70vh"}
          objectFit={"contain"}
          src={btcSrc}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"800"}
        mt={"-21"}
      >
        CryptoNest
      </Text>
      </VStack>
      <Card />
    </Box>
  );
};

export default Home;