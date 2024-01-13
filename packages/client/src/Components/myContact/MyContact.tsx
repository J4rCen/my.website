import React from "react";
import "./MyContact.scss"

interface MyConstactProps {
    href: string;
    description: string;
    img: string
}

const MyConstact = (props: MyConstactProps) => {
    return(
        <div className="div_other_contacts flex">
            <img className="other_contacts_img" src={props.img} alt="" />
            <a className="other_contacts_a color_white" href={props.href} target="_blank">{props.description}</a>
        </div>
    )
}

export default MyConstact