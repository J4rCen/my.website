import React, { ReactNode } from "react";
import "./NavMenu.scss"

interface NavMenuProps {
    isMobile: boolean
}

const NavMenu = (props: NavMenuProps) => {
    const menu = {
        home: "Главная",
        aboutMe: "Обо мне",
        skills: "Навыки",
        portfolio: "Портфолио",
        certificates: "Сертификаты",
        contacts: "Контакты"
    }

    let menuList: Array<Element | React.JSX.Element> = []

    Object.entries(menu).forEach((el, index) => menuList.push(<li className="navmenuList" key={index}><a className="color_white" href={`#${el[0]}`}  key={index}>{el[1]}</a></li>))

    function show() {
        const listSpan = document.querySelector(".listSpan");
        listSpan.classList.toggle("hide");
        listSpan.classList.toggle("flex");
    }

    return(
        <nav className="navmenu bg_color_black">
            <ul className="navmenuUl color_white">
                {props.isMobile ? <span className="listSpan hide">{ menuList as ReactNode }</span> : menuList as ReactNode }
                {props.isMobile ? <li onClick={show} className="navmenuList">Меню</li> : ""}
            </ul>  
        </nav>
        
    )
}

export default NavMenu
