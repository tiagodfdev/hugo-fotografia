import { useState } from "react";
import useWindowSize from '../utils/getDimension';
import SliderCard from "./SliderCard";
import dynamic from 'next/dynamic'
import {FinalObject, FinalObjectIndex} from '../commons/types'
import updateViews from "pages/api/updateViews";

const Lightbox = dynamic(()=> import(`react-image-lightbox`))
const Slider = dynamic(()=> import("react-slick"))

const HomeContent = ({imagesObjectArray}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const imageArray:FinalObjectIndex[] =  imagesObjectArray.map((currentObject: FinalObject)=>{
    const imageObj={
      index: imagesObjectArray.indexOf(currentObject),
      nameId: currentObject.nameId,
      urlLink: currentObject.urlLink,
      viewsCount: currentObject.viewsCount,
    }
    return imageObj
  })
  const sliderBox1 = imageArray.slice(0,7).map((current)=>{
    return(
      <a key={current.nameId} href="#" onClick={()=> {setIsOpen(true); setPhotoIndex(current.index)}}>
        <SliderCard nameId={current.nameId} urlLink={current.urlLink} viewsCount={current.viewsCount}  altName={current.nameId}/>
      </a>
    )
  })
  const sliderBox2 = imageArray.slice(7).map((current)=>{
    return(
      <a key={current.nameId} href="#" onClick={()=> {setIsOpen(true); setPhotoIndex(current.index)}}>
        <SliderCard nameId={current.nameId} urlLink={current.urlLink} viewsCount={current.viewsCount}  altName={current.nameId}/>
      </a>
    )
  })
  const size = useWindowSize();
  const slidersettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size.width>767 ? 5 : 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  const slidersettings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size.width>767 ? 5 : 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    arrows: false
  };
  return (
    <>
      <div id="slider-box">
        <Slider {...slidersettings}>
         {sliderBox1}
        </Slider>
      </div>
      <div id="slider-box2">
        <Slider {...slidersettings2}>
         {sliderBox2}
       </Slider>
      </div>
      {isOpen && (
      <Lightbox
        mainSrc={imageArray[photoIndex].urlLink}
        nextSrc={imageArray[(photoIndex + 1) % imageArray.length].urlLink}
        prevSrc={imageArray[(photoIndex + imageArray.length - 1) % imageArray.length].urlLink}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>{
          updateViews(imageArray[photoIndex!=0?photoIndex-1:13].nameId)
          setPhotoIndex((photoIndex + imageArray.length - 1) % imageArray.length,)
        }}
        onMoveNextRequest={() =>{
          updateViews(imageArray[photoIndex!=13?photoIndex+1:0].nameId)
          setPhotoIndex((photoIndex + 1) % imageArray.length,)
        }}
      />
      )}
    </>
  );
}
export default HomeContent
