
import { Flex, } from '@chakra-ui/core'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import Imagex from 'next/image'
import updateViews from '../pages/api/updateViews'

const TrabalhosBabyBornContent = ({imagesObjectArray}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const imageArray = imagesObjectArray.map((currentObject: {nameId:string; base64Srt: string; viewsCount: string; likesCount: string; urlLink: string })=>{
    const imageObj={
      nameId: currentObject.nameId,
      index: imagesObjectArray.indexOf(currentObject),
      url: currentObject.urlLink,
      views: currentObject.viewsCount,
      likes: currentObject.likesCount,
    }
    return imageObj
  })
  
  const RenderEachPhotos = imageArray.map((currentImage) =>
    <Flex
      key={currentImage.index}
      w='25%'
      alignItems="center"
      justifyContent="center"
    >
      <a href="#" onClick={()=> {setIsOpen(true); setPhotoIndex(currentImage.index)}}>
        <Imagex unsized src={currentImage.url} alt={currentImage.nameId} onClick={()=>updateViews(currentImage.nameId)} />
      </a>
    </Flex>
  )
  return (
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        w="100%"
      >
        {RenderEachPhotos}
        {isOpen && (
      <Lightbox
        mainSrc={imageArray[photoIndex].url}
        nextSrc={imageArray[(photoIndex + 1) % imageArray.length].url}
        prevSrc={imageArray[(photoIndex + imageArray.length - 1) % imageArray.length].url}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>{
          updateViews(imageArray[photoIndex!=0?photoIndex-1:11].nameId)
          setPhotoIndex((photoIndex + imageArray.length - 1) % imageArray.length,)
        }}
        onMoveNextRequest={() =>{
          updateViews(imageArray[photoIndex!=11?photoIndex+1:0].nameId)
          setPhotoIndex((photoIndex + 1) % imageArray.length,)
        }}
      />
    )}
      </Flex>
  );
}
export default TrabalhosBabyBornContent
