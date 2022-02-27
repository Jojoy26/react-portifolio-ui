import styled from "styled-components";
import { AiOutlineHome, AiFillCreditCard } from "react-icons/ai";
import { BsFillGridFill, BsPersonFill } from "react-icons/bs";


export const Container = styled.div`
    display: none;
    padding: 10px 35px;
    position: sticky;
    bottom: 10px;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1.5px);
    justify-content: center;
    align-items: center;
    width: min-content;
    cursor: pointer;

    & :not(:first-child){
        margin-left: 18px;
    }

    & > * {
        background: #000;
        padding: 20px;
        border-radius: 50%;
        transition: 0.3s;
    }

    & > *:hover {
        
    }

    @media(max-width: 900px){
        display: flex;
    }

    @media(max-width: 400px){
        padding: 10px 12px;
    }
    
`

type Selected = {
    isSelected: boolean
}

export const Link = styled.a<Selected>`
    background: ${(props) => props.isSelected ? "#8ACDEA" : "transparent"};

    & > * {
        color: ${(props) => props.isSelected ? "#000" : "#fff"};
    }
`

export const HomeIcon = styled(AiOutlineHome)`
`

export const ProjectIcon = styled(BsFillGridFill)`
    
`

export const ThechnologiesIcon = styled(AiFillCreditCard)`
    
`

export const PersonIcon = styled(BsPersonFill)`
    
`

