import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import {SiWhatsapp} from 'react-icons/si'
import {VscMail} from 'react-icons/vsc'
import getCurrentYear from "utils/getCurrentYear";





const Footer = (): JSX.Element => {
    return (
        <Flex
        as="footer"
        bottom="0"
        w="100%"
        align="center"
        justify="center"
        padding="0.4rem 0"
        bg="transparent"
        color="black"
        direction="column"
        mt="3rem"
      >
      <Box 
        as="ul"
        d="flex"
        w={{base:"60%", md:"10rem"}}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="3rem"
        >
        <Box as="li">
          <Link
            href="https://wa.me/5581998396989?text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20seus%20servi%C3%A7os%20como%20fot%C3%B3grafo%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F">
                <a rel="noopener noreferrer" target="_blank"><SiWhatsapp title="WhatsApp" size="1.5rem" fill="var(--color-text-itens)" /></a>
          </Link>
        </Box>
        <Box as="li">
          <Link
            href="mailto:hugodemetriofotografia@gmail.com">
                <a target="_blank"><VscMail title="e-mail" size="2.1rem" fill="var(--color-text-itens)" /></a>
          </Link>
        </Box>
        <Box as="li">
          <Link
            href="https://www.instagram.com/hugodemetrio_fotografia/?hl=pt-br">
                <a rel="noopener noreferrer" target="_blank"><AiOutlineInstagram title="Instagram" size="1.92rem" fill="var(--color-text-itens)" /></a>
          </Link>
        </Box>
      </Box>
      <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" fontFamily="Fixture" letterSpacing="0.2em" fontSize={{base: "0.7rem", md: "0.7rem"}} fontWeight="500" >
        <Text 
          color="var(--color-text-sobre-p)"
        >
          &copy; {getCurrentYear()} HUGO DEMETRIO FOTOGRAFIA
        </Text>
        <Box d="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Box 
            color="var(--color-text-list)"
            mr="0.5rem"
          >
            <a href="#">DESIGNED BY BRUNNO REIS</a>
          </Box>
          <Box 
            color="var(--color-text-list)"
            ml="0.5rem"
          >
            <a href="https://www.linkedin.com/in/tiago-freire-0a3a3454/" >DEVELOPED BY TIAGODFDEV</a>
          </Box>
        </Box>
      </Box>
    </Flex>
    );
};

export default Footer;
