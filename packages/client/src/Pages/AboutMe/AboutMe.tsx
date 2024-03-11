import React from "react"
import image from "../../../public/AboutMe/me.png"

import "./AboutMe.scss"

import TableContents from "../../Components/TableContents"
import TxtAbout from "./TxtAbout"

const AboutMe = () => {
    return(
        <div className="AboutMe_main_div flex">
            <TableContents link="aboutMe" content="About Me"/>

            <div className="AboutMe_inform grid">
                <img className="AboutMe_inform_img" src={image} alt="" />
                <div className="AboutMe_inform_div">
                    <TxtAbout/>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

