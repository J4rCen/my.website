import React from "react"
import "./Skills.scss"
import TableContents from "../../Components/TableContents"
import SkillsList from "../../Components/skillsList"


const Skills = () => {
    return(
        <div className="skillsList_div">
            <TableContents link="skills" content="skills"/>
            <div className="skillsList">
                <SkillsList title={"Верстка"} skils={["HTML", "Css", "Scss"]}/>
                <SkillsList title={"Програмирование"} skils={["js", "ts", "react", "node"]}/>
                <SkillsList title={"Сборщики"} skils={["vite", "webpack"]}/>
                <SkillsList title={"Тестирования"} skils={["chai", "mocha"]}/>
                <SkillsList title={"Другое"} skils={["github"]}/>
            </div>
        </div>
    )
}

export default Skills