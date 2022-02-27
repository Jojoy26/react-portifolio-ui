import React from "react";
import About from "../../components/about";
import BottomNavigation from "../../components/bottomNavigation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Personal from "../../components/personalAchievements";
import Projects from "../../components/projects";
import Thechnologies from "../../components/technologies";
import Welcome from "../../components/welcome";
import * as C from "./styles"

const Portifolio = () => {
    return (
        <C.Container>
            <Header/>
            <C.ContainerBody>
                <Welcome/> 
                <Projects/>
                <Thechnologies/>
                <About/>
                <Personal/>
                <Footer/>
            </C.ContainerBody>
            <BottomNavigation/>
        </C.Container>
    );
}

export default Portifolio;