import React from "react";
import Slider from "react-slick";


import CustomSlide from "./CustomSlide"
import "./SlideList.scss"

const settings = {
    dots: true,
    adaptiveHeight: true,
    className: "CustomSlide_div",
    speed: 500,
    
}

interface SlideListProps {
    data: Array<any>
}

const SlideList = (props: SlideListProps) => {

    const CustomSlideList: any = []

    props.data.forEach((el, index) => CustomSlideList.push(<CustomSlide key={index} link={el.link} description={el.description} img={el.img} bName={el.bName}/>))

    return (
        <Slider {...settings}>
            {CustomSlideList}
        </Slider>
    )
}

export default SlideList