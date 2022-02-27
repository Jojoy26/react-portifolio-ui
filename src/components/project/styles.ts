import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 450px;
    max-width: 450px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    padding-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 30px;

    @media(max-width: 700px){
        min-width: 250px;
        margin: 0 20px 30px 20px;
    }

`

export const CardInfo = styled.div`
    width: 80%;

    @media(max-width: 500px){
        width: 95%;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 270px;
    background-color: blue;
    object-fit: cover;
`

export const Title = styled.h1`
    color: #90AAB1 ;
    font-family: "Roboto";
    margin-top: 5px;
`

export const Line = styled.div`
    margin: auto;
    margin-top: 30px;
    height: 3px;
    width: 70px;
    border-radius: 20px;
    background: linear-gradient(to right, yellow, #fff);
    
`

export const Paragraph = styled.p`
    margin-top: 20px;
    color: #ddd;
    font-family: "Roboto";
    font-size: 19px;
`

export const SubTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 20px;
    color: #ddd;
    font-family: "Roboto";
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Tec = styled.div`
    color: #E7AA9A;
    font-family: "Roboto";
`

export const RowButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export const Button = styled.button`
    font-size: 19px;
    padding: 7px 12px;
    border: none;
    border-radius: 12px;
    color: #ddd;
    background: #8C4242;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #802828;
    }
`