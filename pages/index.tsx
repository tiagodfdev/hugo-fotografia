
import SEO from '../components/SEO';
import { Flex } from '@chakra-ui/core';
import { getPhotos } from 'utils/bulidTime/getPhotos';
import { InferGetStaticPropsType } from 'next'
import getRandomKeys from 'utils/bulidTime/getRandomKeys';
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'


const LoadedHomeContent = dynamic(()=> import(`components/HomeContent`),
{loading: ()=><div>Loading....</div>})

export default function Home({ data }:InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Flex w="100%" justifyContent="center" alignItems="center" flexDirection="column">
      <SEO title="Home"/>
          <motion.div className="framerFlexColumn" initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
          <LoadedHomeContent imagesObjectArray={data} />
          </motion.div>
    </Flex>
  )
}
export async function getStaticProps() {
  // Fetch data from external API
  const keysOfRandom = await getRandomKeys()
  const data = await getPhotos(null,keysOfRandom)
  // Pass data to the page via props
  return { 
    props: {
       data 
      },
    revalidate: 7200
  }
}
