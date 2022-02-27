import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as C from "./styles";


const Header = () => {


    return (
        <C.Header>
            <C.Area1>
                    <C.CustomIcon size={21}/>
                <div>Portifolio</div>
            </C.Area1>
            <C.Area2>
                <div>
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <a href="#technologies">Technologies</a>
                </div>
                <div>
                    <a href="#about">About</a>
                </div>
            </C.Area2>
            <C.Area3>
                <IconContext.Provider value={{size:"28"}}>
                    <C.GitHubIcon/>
                    <C.LinkedinIcon/>
                    <C.InstagramIcon/>
                </IconContext.Provider>
            </C.Area3>
        </C.Header>
    );
}

export default Header;


