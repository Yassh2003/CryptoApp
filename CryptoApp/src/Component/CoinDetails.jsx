import React, { useEffect, useState } from 'react'
import {Box, Container, HStack, Radio, RadioGroup, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import axios from 'axios'
import { server } from '../main'
import ErrorComponent from './ErrorComponent'

function CoinDetails() {

  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState("inr")

  const params = useParams()
  const currencySymbol =currency === "inr"?"₹":currency==="eur"?"€":"$"

  useEffect(() =>{
    const fetchCoin = async()=>{
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`)
        console.log(data)
        setCoin(data)
        setLoading(false)
        
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    fetchCoin()
  },[params.id])

  if(error) return <ErrorComponent message = {"Error while fetching Coin"}/>


  return (
    <Container>
      {loading?(<Loader/>):(
        <>
        <Box width={"full"} borderWidth={1}>
          jscbjs
        </Box>

        {/* {button} */}
        <RadioGroup value={currency} onChange={setCurrency} padding={"8"}>  
        <HStack spacing={"4"}>
          <Radio value={"inr"}>INR ₹</Radio>
          <Radio value={"usd"}>USD $</Radio>
          <Radio value={"eur"}>EUR €</Radio>
        </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
          <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
            Last Updated on {Date(coin.market_data.last_updated).split("G")[0]}
          </Text>
          <Image src={coin.image.large} w={"16"} h={"16"} objectFit={"contain"} />
          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h > 0?"increase":"decrease"}/>
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>
        </VStack>
        </>
      )}
    </Container>
  )
}

export default CoinDetails