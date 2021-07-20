
import { Flex } from '@chakra-ui/core';
import Footer from './Footer'
import Header from './Header'
import HeaderTrabalhos from './HeaderTrabalhos';
import Main from './Main';



interface PageProps {
  children: React.ReactNode
}
 const Layout = ({children}:PageProps) => {
  return (
      <Flex 
        flexDirection="column"
        w="100%"
        align="center"
        justify="center"
      >
        <Header />
        <HeaderTrabalhos />
          <Main>
            {children}
          </Main>
        <Footer />
      </Flex>
  );
}
export default Layout
