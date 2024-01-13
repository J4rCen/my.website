import React from "react";
import "./ContacMe.scss"
import TableContents from "../../Components/TableContents";

import telegramImg from "../../../public/Contact/telegram.png"
import githubImg from "../../../public/Contact/github.png"
import MyContact from "../../Components/myContact";

const ContactMe = () => {
    return(
        <div className="div_contact_me bg_color_black">
            <TableContents link="contacts" content="ContacMe"/>
            <div className="type_contacts grid">
                <form className="div_email flex">

                    <span className="div_email_input flex">
                        <input className="email_input name" type="text" placeholder="Укажите ваше имя"/>
                        <input className="email_input name" type="email" placeholder="Укажите вашу почту"/>
                        <button>Отправить</button>
                    </span>

                    <textarea className="email_textarea" placeholder="Введите ваше сообщение"></textarea>
                    
                </form>

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