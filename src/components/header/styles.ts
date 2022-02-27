import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillAlipayCircle, AiFillLinkedin } from "react-icons/ai";

export const Header = styled.div`
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 0.8fr;
    padding: 20px;
    padding-top: 50px;
    font-family: "Roboto";

    & div {
        font-size: 22px;
        color: #ddd;
    }

    @media(max-width: 900px){
        display: flex;
        grid-template-columns: unset;
        align-items: center;
        justify-content: space-evenly;
    }

    @media(max-width: 400px){
        flex-direction: column;
    }
`

export const Area1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        font-size: 18px;
    }
`

export const Area2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -5px;

    & a {
        padding-left: 30px;
        padding-right: 30px;
        text-decoration: none;
        color: #ccc;
    }
    & a:hover {
        color: #fff;
    }

    @media(max-width: 900px){
        display: none;
    }
`

export const Area3 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -10px;
    & > * {
        border-radius: 50px;
        background-color: transparent;
        padding: 10px;
        transition: ease-in-out .3s;
        cursor: pointer;
    }

    & > *:hover {
        background-color: #333;
    }

    @media(max-width: 900px){
        margin-top: 0;
    }

    @media(max-width: 400px){
        margin-top: 15px;
    }
`

export const GitHubIcon = styled(FaGithub)`
    margin-right: 35px;
`

export const LinkedinIcon = styled(AiFillLinkedin)`
    margin-right: 35px;
`

export const InstagramIcon = styled(FaInstagram)`
    
`
export const CustomIcon = styled(AiFillAlipayCircle)``

