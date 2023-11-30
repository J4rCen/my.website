import React from "react"

import "./AboutMe.scss"

import TableContents from "../../Components/TableContents"

const AboutMe = () => {
    return(
        <div className="AboutMe_main_div">
            <TableContents link="aboutMe" content="About Me"/>

            <div className="AboutMe_inform">
                <figure className="AboutMe_inform_figure">
                    <img src="" alt="" />
                </figure>

                <div className="AboutMe_inform_div">
                    <p className="">
                        Меня зовут Данил,<br/>
                        я занимаюсь Frontend разработкой с <span className="bold">2022</span> года.<br/>
                        Создаю сайты с помощью <span className="bold">React</span>, <span className="bold">JavaScript</span> и <span className="bold">TypeScript</span>.<br/>
                        Закончил курс яндекс практикума, <br/>
                        прохожу курсы freeCodeCampe.<br/>
                        <br/>
                        Я самаучка, поэтому постоянно изучаю новые технологии разработки. <br/>
                        Регулярно читаю статьи на Habr, <br/>
                        слушаю подкасты по работе с React, <span className="bold">Webpack</span>, Ts и с другими технологиями Frontend разработки.<br/>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

