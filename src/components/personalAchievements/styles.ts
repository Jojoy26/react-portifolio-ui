import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 40px;
`


export const Title = styled.h1`
    background: linear-gradient(#fff, #bbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Roboto";
    font-size: 55px;
    margin-bottom: 60px;

    @media(max-width: 400px){
        font-size: 43px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));

    @media(max-width: 930px){
        grid-template-columns: 1fr 1fr;
        row-gap: 10px;
    }

    @media(max-width: 500px){
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: #212D45;
    height: 120px;
    width: 200px;
    justify-content: center;
    padding-left: 15px;
    border-radius: 15px;

    @media(max-width: 500px){
        width: 90%;
    }
`

export const TitleCard = styled.h1`
    color: #fff;
    font-size: 35px;
`

export const InfoCard = styled.h4`
    color: #aaa;
`