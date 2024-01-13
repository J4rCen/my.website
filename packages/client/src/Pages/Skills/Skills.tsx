import React from "react"
import "./Skills.scss"
import TableContents from "../../Components/TableContents"
import SkillsList from "../../Components/skillsList"


const Skills = () => {
    return(
        <div className="skillsList_div flex">
            <TableContents link="skills" content="skills"/>
            <div className="skillsList flex">
                <SkillsList title={"Верстка"} skils={["HTML", "Css", "Scss"]}/>
                <SkillsList title={"Програмирование"} skils={["Js", "Ts", "React", "NodeJs"]}/>
                <SkillsList title={"Сборщики"} skils={["Vite", "Webpack"]}/>
                <SkillsList title={"Тестирования"} skils={["Chai", "Mocha"]}/>
                <SkillsList title={"Другое"} skils={["Github"]}/>
            </div>
        </div>
    )
}

export default Skills