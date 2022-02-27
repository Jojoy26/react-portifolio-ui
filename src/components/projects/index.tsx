import React, { useState } from "react";
import Project from "../project";
import * as C from "./styles";

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return(
        <C.Container id="projects">
            <C.ArrowLeft size={55} onClick={() => {
                if(currentIndex == 0) return;
                setCurrentIndex(currentIndex - 1)
            }}/>
            <C.ArrowRight size={55} onClick={() =>{
                console.log(currentIndex);
                if(currentIndex == 3) return;
                setCurrentIndex(currentIndex + 1)
            }}/>
            <C.Title>
                Projects
            </C.Title>
            <C.ContainerCarousel>
                <C.Carousel 
                currentIndex={currentIndex}>
                    <C.Block>
                        <Project/>
                    </C.Block>
                    <C.Block>
                        <Project/>
                    </C.Block>
                    <C.Block>
                        <Project/>
                    </C.Block>
                    <C.Block>
                        <Project/>
                    </C.Block>
                </C.Carousel>
            </C.ContainerCarousel>
            <C.ContainerDots>
                <C.Dot isSelected={currentIndex == 0}/>
                <C.Dot isSelected={currentIndex == 1}/>
                <C.Dot isSelected={currentIndex == 2}/>
                <C.Dot isSelected={currentIndex == 3}/>
            </C.ContainerDots>
            <C.Line/>
        </C.Container>
    );
}

export default Projects;