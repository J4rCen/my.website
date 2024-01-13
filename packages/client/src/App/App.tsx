import React from "react"
import "./App.scss"

import NavMenu from "../Components/NavMenu"
import WelcomeScreen from "../Pages/WelcomeScreen"
import AboutMe from "../Pages/AboutMe"
import Skills from "../Pages/Skills"
import Portfolio from "../Pages/Portfolio"
import Certificates from "../Pages/Certificates"
import ContactMe from "../Pages/ContactMe"


const App = () => {

    let isMobile = document.documentElement.clientWidth <= 480

    return(
        <main className="main_react_app">
            <NavMenu isMobile={isMobile}/>
            <WelcomeScreen isMobile={isMobile}/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Certificates/>
            <ContactMe/>
        </main>
    )
}

export default App