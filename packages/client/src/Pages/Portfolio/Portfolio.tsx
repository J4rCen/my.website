import React from "react"
import TableContents from "../../Components/TableContents"
import SlideList from "../../Components/SlideList"
import "./Portfolio.scss"



import project from "./project"


const MyWorks = () => {
    return (
        <div className="MyWorks_div block">
            <TableContents link="portfolio" content="Portfolio"/>
            <div className="MyWorks_div_slideList block">
                <SlideList data={project}/>
            </div>
        </div>
    )
}

export default MyWorks