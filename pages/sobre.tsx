import { Flex } from '@chakra-ui/core';
import SEO from '../components/SEO';
import SobreContent from '../components/SobreContent'
import { motion } from "framer-motion"

export default function Sobre(){
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <SEO title="Sobre"/>
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
      <SobreContent />
      </motion.div>
    </Flex>
  );
}