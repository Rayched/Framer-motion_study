//메뉴바 애니메이션 예제

import { motion } from "framer-motion";
import { useState } from "react";
import {styled} from "styled-components";

interface I_MenuItem {
    isActive: boolean;
    color: string;
};

interface I_MenuData {
    ItemId: string;
    ItemNm: string;
    ActiveColor: string;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const MenuBar = styled.nav`
    width: 600px;
    height: 70px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.div<I_MenuItem>`
    width: 24%;
    font-size: 17px;
    font-weight: bold;
    margin: 0px 3px;
    align-items: center;
    text-align: center;
    color: ${(props) => props.isActive ? props.color : "black"};
    position: relative;

    &:hover {
        color: ${(props) => !(props.isActive) ? "gray" : props.color};
    };
`;

const UnderBar = styled(motion.div)<{ActiveColor: string}>`
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    width: 90%;
    height: 3px;
    background: ${(props) => props.ActiveColor};
    vertical-align: bottom;
`;

const MenuData: I_MenuData[] = [
    {ItemId: "home", ItemNm: "홈", ActiveColor: "red"},
    {ItemId: "series", ItemNm: "시리즈", ActiveColor: "orange"},
    {ItemId: "movies", ItemNm: "영화", ActiveColor: "green"},
    {ItemId: "bests", ItemNm: "인기 컨텐츠", ActiveColor: "blue"}
];

function MenuExam(){
    const [isURLs, setURL] = useState("home");

    const onChange = (urls: string) => {
        if(isURLs === urls){
            return;
        } else {
            setURL(urls);
        }
    };

    return (
        <Wrapper>
            <MenuBar>
                {
                    MenuData.map((data) => {
                        return (
                            <MenuItem
                                isActive={isURLs === data.ItemId}
                                color={data.ActiveColor}
                                onClick={() => onChange(data.ItemId)}
                            >
                                {data.ItemNm}
                                { 
                                    isURLs !== data.ItemId ? null 
                                    : <UnderBar layoutId="underbar" ActiveColor={data.ActiveColor}/>
                                }
                            </MenuItem>
                        )
                    })
                }
            </MenuBar>
        </Wrapper>
    );
};

export default MenuExam;

/**
 * reference
 * https://velog.io/@iepppop/react-framer-motion-%EB%A9%94%EB%89%B4%EB%B0%94
 */