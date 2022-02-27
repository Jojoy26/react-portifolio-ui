import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Container = styled.div`
    padding-bottom: 40px;
    position: relative;
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



export const ContainerCarousel = styled.div`
    overflow-x: hidden;
`

type CarouselProps = {
    currentIndex: number
}

export const Carousel = styled.div<CarouselProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    transition: all .3s;

    
    scroll-snap-type: x mandatory;

    & > * {
        scroll-snap-align: start;
    }

    &::-webkit-scrollbar{
        display: none;
    }

    

    @media(min-width: 1140px){
        & > :first-child{
            margin-top: 60px;
        }

        & > :nth-child(2){
            margin-left: 50px;
        }

        & > :nth-child(4){
            margin-left: 50px;
            margin-top: -45px;
        }
    }

    @media(max-width: 1140px){
        margin-left: ${(props) => "calc(-100% *" + props.currentIndex +")"};
        align-items: unset;
        justify-content: unset;
        flex-wrap: unset;
    }

    @media(max-width: 700px){
        margin-left: unset;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export const Line = styled.div`
    width: 70px;
    height: 6px;
    background: linear-gradient(to right, #8D5EEC, #55C9E0);
    border-radius: 20px;
    margin-top: 80px;
`

export const Block = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1140px){
        min-width: 100%;
    }
`

export const ArrowLeft = styled(AiOutlineArrowLeft)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    align-self: center;
    margin: auto;
    color: #fff;
    display: none;

    @media (min-width: 700px) and (max-width: 1140px){
        display: block
    }
`
export const ArrowRight = styled(AiOutlineArrowRight)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    align-self: center;
    margin: auto;
    color: #fff;
    display: none;

    @media (min-width: 700px) and (max-width: 1140px){
        display: block
    }
`


export const ContainerDots = styled.div`
    margin: auto;
    display: none;
    width: 100%;
    justify-content: center;

    & > :not(:first-child){
        margin-left: 15px;
    }

    @media (min-width: 700px) and (max-width: 1140px){
        display: flex
    }
    
`

type DotProps = {
    isSelected: boolean
}

export const Dot = styled.div<DotProps>`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${(props) => props.isSelected ? "#13F5C9" : "#fff"};
`