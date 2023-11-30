import React from "react";
import Slider from "react-slick";


import CustomSlide from "./CustomSlide"
import "./SlideList.scss"

const settings = {
    dots: true,
    adaptiveHeight: true,
    className: "CustomSlide_div",
}

interface SlideListProps {
    project: Array<any>
}

const SlideList = (props: SlideListProps) => {

    const CustomSlideList: any = []

    props.project.forEach((el, index) => CustomSlideList.push(<CustomSlide key={index} link={el.link} description={el.description} img={el.img}/>))

    return (
        <Slider {...settings}>
            {CustomSlideList}
        </Slider>
    )
}

export default SlideList