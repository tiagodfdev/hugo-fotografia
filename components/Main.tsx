import * as React from 'react';
import {Flex} from '@chakra-ui/core'

interface PageProps {
  children: React.ReactNode
}

const Main = ({children}:PageProps) => {
  return (
      <Flex 
        flexDirection="column" 
        as="main"
        mb="1rem"
        w='100%' 
        justify="center" 
        align="center" 
        bg="transparent"  
      >
          {children}
      </Flex>
  )
}
export default Main
