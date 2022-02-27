import React from "react";
import * as C from "./styles";

const Project = () => {
    return(
        <C.Container>
            <C.Img src={"https://krify.co/wp-content/uploads/2019/11/How-to-develop-personallised-e-commerce-gift-website.jpg"}/>
            <C.Title>
                MERN Memories
            </C.Title>
            <C.CardInfo>
                <C.Line/>
                <C.Paragraph>
                    Lorem ipsum dolor sit am
                    et consectetur, adipisicing elit. Minim
                    a, quibusdam at illum voluptatibus lauda
                    ntium mollitia explicabo ex, repudiandae molestias
                    temporibus numquam optio porro. Co
                    rrupti obcaecati hic nemo placeat facilis id?
                    ntium mollitia explicabo ex, repudiandae molestias
                    temporibus numquam optio porro. Co
                    rrupti obcaecati hic nemo placeat facilis id?
                </C.Paragraph>

                <C.SubTitle>
                    Stack
                </C.SubTitle>
                <C.Row>
                    <C.Tec>
                        Mongo
                    </C.Tec>
                    <C.Tec>
                        Express
                    </C.Tec>
                    <C.Tec>
                        React
                    </C.Tec>
                    <C.Tec>
                        Node
                    </C.Tec>
                </C.Row>
                <C.RowButtons>
                    <C.Button>
                        Code
                    </C.Button>
                    <C.Button>
                        Source
                    </C.Button>
                </C.RowButtons>
            </C.CardInfo>
        </C.Container>
    );
}

export default Project;