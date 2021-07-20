import * as React from 'react';
import ActiveLink from '../utils/ActiveLink'
import { Flex, Box, UnorderedList, ListItem, Heading } from '@chakra-ui/core';

const Header = (): JSX.Element => {
    const menuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-home',
        },
        {
            title: 'Trabalhos',
            url: '/trabalhos/model',
            cName: 'nav-trabalhos',
        },
        {
            title: 'Sobre',
            url: '/sobre',
            cName: 'nav-sobre',
        },
        {
            title: 'Contato',
            url: '/contato',
            cName: 'nav-contato',
        },
    ];
    const listRender = menuItems.map((item, index) => {   
        return(        
            <ListItem                        
                key={index}
                fontFamily="Fixture" 
                h="2.8rem"
                letterSpacing="0.2em" 
                fontSize={{base: "1.3rem", md: "1.2rem"}} 
                fontWeight="400" 
                mx={{base: "1rem", md: "1.5rem"}}
                color="var(--color-text-list)"                      
                cursor="pointer"
                backgroundColor="var(--color-background)"
            >   
                <ActiveLink activeClassName="active" passHref href={item.url} itemName={item.title} >
                    <Box textAlign="center" w="110%" h="100%">
                        {item.title.toUpperCase()}
                    </Box>
                </ActiveLink>
            </ListItem>
        )
    })
    return (
        <Flex
            as="header"
            bottom="0"
            w="100%"
            align="center"
            justify="center"
            flexDirection="column"
            bg="transparent"
            mt="2rem"

        >
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading as="h1">
                <img src={require('../assets/icons/logo.svg')} alt="Fotografia Recife" />
            </Heading>
          </Box>
          <Box as="nav">
            <UnorderedList m="0" p="0" d="flex" flexDirection="row" backgroundColor="transparent">
                {listRender}
            </UnorderedList>
            </Box>
            <Box 
                d="flex" 
                w="100%"
                alignContent="center" 
                justifyContent="center" 
                backgroundColor="transparent"
                mb="2.4rem"
            >
            <Box
                w={{ base: "100%", md: "60%" }}
                background="radial-gradient(50% 54450% at 50% 50%, var(--color-text-itens) 0%, rgba(85, 106, 123, 0.67) 75.06%, rgba(85, 106, 123, 0) 100%);" 
                h="0.1rem"
                minHeight="1px"
                borderRadius="50% / 50%"
            />
            </Box>
        </Flex>
    );
};
export default Header;
