import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/core';
import {TiEye} from 'react-icons/ti'
import updateViews from '../pages/api/updateViews'
import {ISliderCard} from '../commons/types'
import Image from 'next/image'

const SliderCard = ({nameId,urlLink,viewsCount,altName}:ISliderCard) => {
    return (
        <Box>
            <Grid
                templateColumns="1fr"
                templateRows="9fr 1fr"
                rowGap="0.8rem"
            >
                <GridItem 
                    rowSpan={1}
                    colSpan={1}
                >
                    <Box onClick={()=>updateViews(nameId)}>
                        <Image unsized src={urlLink} alt={altName} />    
                    </Box>               
                </GridItem>
                <GridItem 
                    rowSpan={1}
                    colSpan={1}
                    justifySelf="stretch"
                    alignSelf="center"
                    paddingRight="0.5rem"
                >
                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <TiEye transform="translate( 0 0 )" fill="var(--color-view-icon)" size="0.7rem" />
                        <Text pl="0.1rem" fontSize="0.6rem" fontWeight="600" color="var(--color-text-card)">{viewsCount}</Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}
export default SliderCard;
