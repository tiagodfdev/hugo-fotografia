import * as React from 'react';
import Link from '../utils/ActiveLink';
import { useRouter } from 'next/router'
import { Flex, UnorderedList, ListItem, Box, Text } from '@chakra-ui/core';

const HeaderTrabalhos = (): JSX.Element => {
    const menuItems = [
        {
            title: 'model',
            url: '/trabalhos/model',
            cName: 'nav-model',
        },
        {
            title: 'baby born',
            url: '/trabalhos/baby-born',
            cName: 'nav-bborn',
        },
        {
            title: 'gestantes',
            url: '/trabalhos/gestantes',
            cName: 'nav-gestantes',
        },
        {
            title: 'eventos',
            url: '/trabalhos/eventos',
            cName: 'nav-eventos',
        },

    ];
    const subItemOf = "/trabalhos"
    const router = useRouter()
    let route = router.pathname.slice(0,router.pathname.indexOf('/',1))
    const isTrabalhos = ((route===subItemOf)||(router.pathname===subItemOf))?"flex":"none"
    const listRender = menuItems.map((item, index) => {
        return(
            <ListItem 
                fontFamily="Fixture" 
                key={index} 
                letterSpacing="0.2em" 
                fontSize={{base: "1rem", md: "1.2rem"}} 
                fontWeight="400" 
                mx={{base: "1rem", md: "1.5rem"}}
                color="var(--color-text-list)" >
                <Link activeClassName="activeTrabalhos" passHref href={item.url}>
                    <Box border="0.18rem solid transparent" cursor="pointer" boxSizing="content-box" w="100%" h="auto">
                        <Text ml="2px" w="100%" textAlign="center" verticalAlign="top" >{item.title.toUpperCase()}</Text>
                    </Box>
                </Link>
            </ListItem>
        )
    })
    return (
        <Flex
            d={isTrabalhos}
            as="div"
            bottom="0"
            w="100%"
            align="center"
            justify="center"
            flexDirection="column"
            bg="transparent"
            mt="0rem"
        >
            <Box as="nav">
            <UnorderedList h="2rem" m="0" p="0" d="flex" mb="1rem" flexDirection="row">
                {listRender}
            </UnorderedList>
            </Box>
        </Flex>
    );
};

export default HeaderTrabalhos;
