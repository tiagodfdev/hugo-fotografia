import SEO from '../../components/SEO';
import dynamic from 'next/dynamic'
import { InferGetStaticPropsType } from 'next'
import {getPhotos} from '../../utils/bulidTime/getPhotos'
import { motion } from "framer-motion"

const LoadedTrabalhosBabyBornContent = dynamic(()=> import(`components/TrabalhosBabyBornContent`),
{loading: ()=><div>Loading...</div>})

export default function Trabalhos({finalObjectToRender}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <SEO title="Trabalhos - Baby Born"/>
      <motion.div className="framerFlex" initial="hidden" animate="visible" variants={{
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
      <LoadedTrabalhosBabyBornContent imagesObjectArray={finalObjectToRender} />
    </motion.div>
    </div>
  )
}
export async function getStaticProps() {
  
  const finalObjectToRender = await getPhotos("baby-born/")

  return {
    props: {
      finalObjectToRender,
    },
    revalidate: 600000
  }
}