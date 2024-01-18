import React from "react";
import "./ContacMe.scss"
import TableContents from "../../Components/TableContents";

import telegramImg from "../../../public/Contact/telegram.png"
import githubImg from "../../../public/Contact/github.png"
import MyContact from "../../Components/myContact";
import SendEmail from "../../Components/sendEmail";

const ContactMe = () => {
    return(
        <div className="div_contact_me bg_color_black">
            <TableContents link="contacts" content="ContacMe"/>
            <div className="type_contacts grid">
                <SendEmail/>

                <div className="delimiter bg_color_white"></div>

                <div className="other_contacts flex">
                    <MyContact img={telegramImg} href="https://web.telegram.org/k/#@spb_d_davletov" description="Мой Telegram"/>
                    <MyContact img={githubImg} href="https://github.com/J4rCen" description="Мой GitHub"/>
                </div>
            </div>
            
        </div>
    )
}

export default ContactMe