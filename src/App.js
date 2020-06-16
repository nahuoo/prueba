import React, {useContext} from 'react'
import './App.css'
import Header3D from './components/Header3D'
import Navbar from './components/Navbar'
import GlobalStyle from './assets/styled-components/GlobalStyles'
import SectionBackground from './components/SectionBackground'
import { AngleContext } from './components/Contexts/AngleContext'

const App = () => {

    const { angulo } = useContext(AngleContext)

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Header3D />
            {angulo === 'Portfolio' && 
                <SectionBackground />
            }
        </>
    )
}

export default App
