import { Flex, Heading, Text } from '@chakra-ui/core'
import Image from 'next/image'
import React from 'react'

 function SobreContent() {
  const fotoSobre = require('assets/images/16-9.png')
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      w="80%"
    >
      <Flex w="100%" mb="2rem" alignItems="center" justifyContent="center" >
        <Image unsized src={fotoSobre}/>
      </Flex>
      <Flex w="100%" flexDirection="column" justifyContent="flex-start">
        <Heading d="flex" as='h1' fontFamily="Fixture" fontSize="2em" letterSpacing="0.2em" fontWeight="400" color="var(--color-text-sobre-h1)" >
          HUGO DEMETRIO
        </Heading>
        <Heading d="flex" as='h2' fontFamily="Fixture" fontSize="1.5em" letterSpacing="0.2em" fontWeight="400" color="var(--color-text-sobre-h2)" >
          O FOTOGRAFO
        </Heading>
        <Text d="flex" as='p' fontFamily="Fixture" fontSize="1.2em" letterSpacing="0.1em" fontWeight="400" color="var(--color-text-sobre-p)" >
          Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Suco de cevadiss deixa as pessoas mais interessantis. Quem manda na minha terra sou euzis!
        </Text>
      </Flex>
    </Flex>
  );
  }

export default SobreContent
