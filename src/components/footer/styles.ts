import styled from "styled-components";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export const Container = styled.div`
    padding-bottom: 40px;
`

export const Hr = styled.div`
    width: 100%;
    height: 0.1px;
    background: #555;
`

export const Row = styled.div`
    display: flex;
    margin-top: 30px;

    & :first-child {
        margin-right: 50px;
    }

    @media(max-width: 400px){
        flex-direction: column;
        & > :nth-child(2){
            margin-top: 20px;
        }
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const FirstText = styled.div`
    color: #999;
    font-size: 17px;
    margin-bottom: 20px;
    text-transform: uppercase;
`

export const SecondText = styled.div`
    font-size: 21px;
    color: #bbb;
    
`

export const RowItens = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    @media(max-width: 530px){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const FooterText = styled.p`
    color: #aaa;
    font-size: 19px;
`

export const BlockIcons = styled.div`
    & > * {
        border-radius: 50px;
        background-color: transparent;
        padding: 10px;
        color: #fff;
        transition: ease-in-out .3s;
        cursor: pointer;
    }

    & > *:hover {
        background-color: #333;
    }

    @media(max-width: 530px){
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