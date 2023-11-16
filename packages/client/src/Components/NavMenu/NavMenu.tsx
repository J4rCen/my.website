import React, { ReactNode } from "react";
import "./NavMenu.scss"

const NavMenu = () => {
    const menu = {
        home: "Главная",
        aboutMe: "Обо мне",
        skills: "Навыки",
        portfolio: "Портфолио",
        certificates: "Сертификаты",
        contacts: "Контакты"
    }

    const menuList: Array<Element | React.JSX.Element> = []

    Object.entries(menu).forEach((el, index) => menuList.push(<li id={el[0]} className="navmenuList" key={index}>{el[1]}</li>))

    return(
        <ul className="navmenu">
            {menuList as ReactNode}
        </ul>
    )
}

export default NavMenu
