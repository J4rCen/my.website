import React from "react"

import "./TableCntents.scss"

interface contentsProps {
    link: string,
    content: string
}

const TableOfContents = (props: contentsProps) => {
    return (
        <div id={props.link} className="ontents_div">
            <p className="ontents_p color_white">{props.content}</p>
        </div>
    )
}

export default TableOfContents