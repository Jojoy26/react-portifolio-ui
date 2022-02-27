import styled from "styled-components";
import background from "../../assets/images/background.png";



export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const ContainerBody = styled.div`
    max-width: 1180px;
    padding: 0 20px;
    margin: auto;
`

