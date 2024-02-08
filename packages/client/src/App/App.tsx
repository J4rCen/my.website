import React, { useEffect, useState } from "react"
import "./App.scss"
import NavMenu from "../Components/NavMenu"
import WelcomeScreen from "../Pages/WelcomeScreen"
import AboutMe from "../Pages/AboutMe"
import Skills from "../Pages/Skills"
import Portfolio from "../Pages/Portfolio"
import Certificates from "../Pages/Certificates"
import ContactMe from "../Pages/ContactMe"


const App = () => {
    const [width, setWidth] = useState(false)

    useEffect(() => {
        if(window.innerWidth <= 480) {
            setWidth(true)
        } else {
            setWidth(false)
        }
    }, [])

    return(
        <main className="main_react_app">
            <NavMenu isMobile={width}/>
            <WelcomeScreen isMobile={width}/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Certificates/>
            <ContactMe/>
        </main>
    )
}

export default App