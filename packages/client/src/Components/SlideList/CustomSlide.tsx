import React from "react"
import "./SlideList.scss"

interface CustomSlideProps {
    link: string;
    description: string;
    img: string;
    bName: string;
}


const CustomSlide = (props: CustomSlideProps) => {
    return(
        <div className="customSlide_div flex">
            <img className="customSlide_images" src={props.img} alt="Фото проекта" />
            <div className="customSlide_description flex">
                <p className="descriptions_portfolio">{props.description}</p>
                <a className="a_link_linkButton color_white" href={props.link} target="_blank"><div className="div_linkButton flex">{props.bName}</div></a>
            </div>
        </div>
    )
}

export default CustomSlide
