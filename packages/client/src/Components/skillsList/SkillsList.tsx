import React, { ReactNode } from "react"
import "./SkillsList.scss"
import skillsImage from "./imgStore"

interface skillsListProps {
    title: string
    skils: Array<string>
}

const SkillsList = (props: skillsListProps) => {
    
    const skillsList: any = []

    props.skils.forEach((el, index) => {
        skillsList.push(<div className="skils__skillsListDiv" key={index}>{skillsImage[el]}<p className="skils__skillsListDiv__p">{el}</p></div>)
    })

    return (
        <div className="skillsListDiv">
            <div className="title__skillsListDiv">
                <p>{props.title}</p>
            </div>
            <div className="div_flex">
                {skillsList as ReactNode}
            </div>
        </div>
    )
}

export default SkillsList