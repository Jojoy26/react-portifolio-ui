import React from "react";
import { IconContext } from "react-icons";
import * as C from "./styles";

const Footer = () => {
    return(
        <C.Container>
            <C.Hr/>
            <C.Row>
                <C.Column>
                    <C.FirstText>
                        Call
                    </C.FirstText>
                    <C.SecondText>
                        111-111-111
                    </C.SecondText>
                </C.Column>
                <C.Column>
                    <C.FirstText>
                        email
                    </C.FirstText>
                    <C.SecondText>
                        email@email.com
                    </C.SecondText>
                </C.Column>
            </C.Row>
            <C.RowItens>
                <C.FooterText>
                    Inovation one project at a time
                </C.FooterText>
                <C.BlockIcons>
                    <IconContext.Provider value={{size:"28"}}>
                        <C.GitHubIcon/>
                        <C.LinkedinIcon/>
                        <C.InstagramIcon/>
                    </IconContext.Provider>
                </C.BlockIcons>
            </C.RowItens>
        </C.Container>
    );
}

export default Footer;