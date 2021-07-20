import SEO from '../../components/SEO';
import dynamic from 'next/dynamic'
import { InferGetStaticPropsType } from 'next'
import {getPhotos} from '../../utils/bulidTime/getPhotos'
import { motion } from "framer-motion"

const LoadedTrabalhosGestantesContent = dynamic(()=> import(`components/TrabalhosGestantesContent`),
{loading: ()=><div>Loading...</div>})

export default function Trabalhos({finalObjectToRender}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <SEO title="Trabalhos - Gestantes"/>
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
      <LoadedTrabalhosGestantesContent imagesObjectArray={finalObjectToRender}/>
      </motion.div>
    </div>
  )
}
export async function getStaticProps() {

  const finalObjectToRender = await getPhotos("gestantes/")

  return {
    props: {
      finalObjectToRender,
    },
    revalidate: 600000
  }
}