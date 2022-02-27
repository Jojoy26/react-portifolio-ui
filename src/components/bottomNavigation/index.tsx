import React, { useState } from "react";
import * as C from "./styles";

const BottomNavigation = () => {

    const [selectItem, setSelectItem] = useState(0);

    const handleClick = (index: number) => {
        setSelectItem(index)
    }

    return(
        <C.Container>
            <C.Link href="#welcome" isSelected={selectItem == 0} onClick={()=>{handleClick(0)}}> 
                <C.HomeIcon size={20}/>
            </C.Link>
            <C.Link href="#projects" isSelected={selectItem == 1} onClick={()=>{handleClick(1)}}>
                <C.ProjectIcon size={20}/>
            </C.Link>
            <C.Link href="#technologies" isSelected={selectItem == 2} onClick={()=>{handleClick(2)}}>
                <C.ThechnologiesIcon size={20}/>
            </C.Link>
            <C.Link href="#about" isSelected={selectItem == 3} onClick={()=>{handleClick(3)}}>
                <C.PersonIcon size={20}/>
            </C.Link>
        </C.Container>
    );
}

export default BottomNavigation;