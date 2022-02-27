import styled from "styled-components";
import { GrReactjs } from "react-icons/gr";
import { SiFlutter, SiTypescript } from "react-icons/si"

export const Container = styled.div`
    padding-bottom: 40px;
`

export const Title = styled.h1`
    background: linear-gradient(#fff, #bbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Roboto";
    font-size: 55px;

    @media(max-width: 400px){
        font-size: 43px;
    }
`

export const TextInfo = styled.p`
    font-size: 18px;
    color: #aaa;
    font-family: "Roboto";
    line-height: 27px;
`
export const Row = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 80px;

    & > *{
        padding-left: 10px;
    }

    @media(max-width: 860px){
        width: 100%;
    }

    @media(max-width: 525px){
        flex-wrap: wrap;
        & > *{
            padding-bottom: 20px;
        }
    }

    @media(max-width: 325px){
        flex-direction: column;
        align-items: center;
        & > *{
            padding-left: 0;
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
`

export const ReactIcon = styled(GrReactjs)`
    color: #fff;
`

export const FlutterIcon = styled(SiFlutter)`
    color: #3AF0E2;
`

export const TypescriptIcon = styled(SiTypescript)`
    color: #0A2953;
`

export const TitleCard = styled.h4`
    margin: 10px 0;
    color: #fff;
    font-size: 26px;
    font-family: "Roboto";
`

export const DescriptionCard = styled.div`
    color: #aaa;
    font-size: 19px;
    font-family: "Roboto";
`

export const Line = styled.div`
    height: 6px;
    width: 70px;
    background: linear-gradient(to right, #6636BF, #EC6448);
    border-radius: 20px;
    margin-top: 30px;
`