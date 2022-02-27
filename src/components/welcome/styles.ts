import styled, { keyframes } from "styled-components";
import { SiFlutter, SiReact } from 'react-icons/si'

export const Container = styled.div`
    padding-top: 80px;
    margin-bottom: 70px;
`

export const BigTitle = styled.h1`
    color: #ddd;
    font-size: 70px;
    font-family: "Roboto";

    @media(max-width: 400px){
        font-size: 65px
    }
`

export const Paragraph = styled.p`
    margin-top: 20px;
    font-size: 23px;
    color: #aaa;
    font-family: "Roboto";
`

export const ButtonLearn = styled.button`
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    padding: 14px 40px 14px 40px;
    background: linear-gradient(to right, #8D5EEC, #55C9E0);
    font-family: "Roboto";
    border-radius: 40px;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    transition: ease-in-out .5s;
    transition-duration: 0.3s;
    transition-property: padding;
    &:hover {
        padding: 18px 50px 18px 50px;
        background: linear-gradient(to right, #7035E8, #27C1DF);
    }
`

export const Line = styled.div`
    width: 70px;
    height: 6px;
    background: linear-gradient(to right, #8D5EEC, #55C9E0);
    border-radius: 20px;
    margin-top: 80px;
`
