import React from "react"

import "./TableCntents.scss"

interface contentsProps {
    link: string,
    content: string
}

const TableOfContents = (props: contentsProps) => {
    return (
        <span>
            <div id={props.link} className="indentation"></div>
            <div className="ontents_div">
                <p className="ontents_p color_white">{props.content}</p>
            </div>
        </span>
        
    )
}

export default TableOfContents