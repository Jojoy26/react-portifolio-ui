import React from "react";
import { IconContext } from "react-icons";
import Typist from 'react-text-typist';
import * as C from "./styles";

const Welcome = () => {

    const phrase: String = "Welcome To My Personal Portifolio";

    const write = () => {
        
    }

    return(
        <C.Container id="welcome">
            <C.BigTitle>
                <Typist sentences={["Welcome To"]} loop={false} hideCursorOnFinish={true} typingSpeed={70}/>
                <br/>
                <Typist sentences={["My Personal Portifolio"]} loop={false} startDelay={1700} hideCursorOnFinish={true}/>
            </C.BigTitle>
            <C.Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Veniam possimus corrupti vel aut consequuntur nulla <br />
                enim molestias dignissimos ratione, sit voluptate.
                Voluptatum <br /> quia doloremque hic repudiandae quae tempora rem! Earum.
            </C.Paragraph>
            <C.ButtonLearn>
                Learn More
            </C.ButtonLearn>
            <C.Line/>

        </C.Container>
    );
}

export default Welcome;