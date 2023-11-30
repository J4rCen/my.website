import React from "react"
import "./SlideList.scss"

interface CustomSlideProps {
    link: string;
    description: string;
    img: string
}

const CustomSlide = (props: CustomSlideProps) => {
    return(
        <div className="CustomSlide_div">
            <div className="CustomSlide_description">
                <p>{props.description}</p>
                <a href={props.link} target="_blank">Ссылка на проект</a>
            </div>
            <figure>
                <img className="images" src={props.img} alt="Фото проекта" />
            </figure>
        </div>
    )
}

export default CustomSlide
