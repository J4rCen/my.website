import React from "react";
import "./WelcomeScreen.scss"
import imgbg from "../../../public/WelcomeScreen/welcomeScreenImag.png"
import imgbgm from "../../../public/WelcomeScreen/welcomeScreenImagMobile.png"

const WelcomeScreen = (props: any) => {
    return(
        <div id="home" className="divImg">
            <figure className="welcomeScreenImage__figure">
                <img src={props.isMobile ? imgbgm : imgbg } alt="" className="welcomeScreenImage__img"/>
                <figcaption className="welcomeScreenImage__figcaption">
                    <span className="myName_span">Davletov Danil</span>
                    <span className="myProfession-span">Front-end developer</span>
                </figcaption>
            </figure>
        </div>
    )
}

export default WelcomeScreen