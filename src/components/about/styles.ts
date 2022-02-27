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

    @media(max-width: 400px){
        font-size: 43px;
    }
`

export const TextInfo = styled.p`
    font-size: 18px;
    color: #aaa;
    font-family: "Roboto";
    line-height: 27px;
    margin-bottom: 30px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    
    @media(max-width: 800px){
        grid-template-columns: 1fr 1fr;
        row-gap: 30px;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowBlock = styled.div`
    display: flex;
    align-items: flex-flex-start;
`

export const YearText = styled.div`
    font-size: 22px;
    color: #fff;
    margin-bottom: 10px;
`

export const SubText = styled.div`
    color: #ddd;
`

export const LineGradient = styled.div`
    height: 1px;
    width: 40px;
    background: linear-gradient(to right, #888, rgba(0, 0, 0, 0.01));
    margin-left: 15px;
`

export const Line = styled.div`
    width: 70px;
    height: 6px;
    background: linear-gradient(to right, #8D5EEC, #55C9E0);
    border-radius: 20px;
    margin-top: 40px;
`