import SEO from '../components/SEO';
import ContatoContent from '../components/ContatoContent'
import { Flex } from '@chakra-ui/core';
import { motion } from "framer-motion"

export default function Contato() {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <SEO title="Contato"/>
      <ContatoContent />
    </Flex>
  )
}
