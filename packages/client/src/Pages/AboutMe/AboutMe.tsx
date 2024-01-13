import React from "react"

import "./AboutMe.scss"

import TableContents from "../../Components/TableContents"
import TxtAbout from "./TxtAbout"

const AboutMe = () => {
    return(
        <div className="AboutMe_main_div flex">
            <TableContents link="aboutMe" content="About Me"/>

            <div className="AboutMe_inform grid">
                <figure className="AboutMe_inform_figure">
                    <img src="" alt="" />
                </figure>

                <div className="AboutMe_inform_div">
                    <TxtAbout/>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

