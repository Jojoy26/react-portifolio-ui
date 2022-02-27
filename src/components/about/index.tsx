import React from "react";
import * as C from "./styles";

const About = () => {
    return(
        <C.Container id="about">
            <C.Title>
                About Me
            </C.Title>
            <C.TextInfo>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet od
                io mollitia repellat <br />
                nobis? Molestias, nostrum! Tenetur, animi
                impedit fugiat quidem non dolores ratione <br /> soluta. 
                Quis voluptatibus sint at molestias neque.
            </C.TextInfo>
            <C.Grid>
                <C.Card>
                    <C.RowBlock>
                        <C.YearText>
                            2017
                        </C.YearText>
                        <C.LineGradient/>
                    </C.RowBlock>
                    <C.SubText>
                        Started my journey
                    </C.SubText>
                </C.Card>
                <C.Card>
                    <C.RowBlock>
                        <C.YearText>
                            2018
                        </C.YearText>
                        <C.LineGradient/>
                    </C.RowBlock>
                    <C.SubText>
                        Worked as a freelancer <br /> developer
                    </C.SubText>
                </C.Card>
                <C.Card>
                    <C.RowBlock>
                        <C.YearText>
                            2017
                        </C.YearText>
                        <C.LineGradient/>
                    </C.RowBlock>
                    <C.SubText>
                        Started my journey
                    </C.SubText>
                </C.Card>
                <C.Card>
                    <C.RowBlock>
                        <C.YearText>
                            2017
                        </C.YearText>
                        <C.LineGradient/>
                    </C.RowBlock>
                    <C.SubText>
                        Started my journey
                    </C.SubText>
                </C.Card>
            </C.Grid>
            <C.Line/>
        </C.Container>
    );
}

export default About;