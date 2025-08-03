import {styled} from "styled-components";
import { useStore } from "zustand";
import { MenuStore } from "./Menu_store";
import { useState } from "react";
import { motion } from "framer-motion";

interface I_Item {
    ActiveColor: string;
    isActive: boolean;
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const MenuBar = styled.nav`
    width: 35em;
    height: 70px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MenuItem = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ItemText = styled.div<I_Item>`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${(props) => props.isActive ? props.ActiveColor : "black"};
`;

const MotionBar = styled(motion.div)<{ActiveColor: string}>`
    width: 75%;
    height: 5%;
    position: absolute;
    bottom: 5px;
    background-color: ${(props) => props.ActiveColor};
    border: 1px solid ${(props) => props.ActiveColor};
    border-radius: 15px;
`

function MenuExamV2(){
    const {Menues} = useStore(MenuStore);
    const [Targets, setTargets] = useState("Home");

    return (
        <Wrapper>
            <MenuBar>
                {
                    Menues.map((data) => {
                        return (
                            <MenuItem key={data.ItemId} onClick={() => setTargets(data.ItemId)}>
                                <ItemText 
                                    ActiveColor={data.ActiveColor}
                                    isActive={data.ItemId === Targets}
                                >
                                    {data.ItemNm}
                                </ItemText>
                                {
                                    data.ItemId === Targets ? <MotionBar layoutId="MotionBar" ActiveColor={data.ActiveColor} transition={{duration: 0.3}}/> : null
                                }
                            </MenuItem>
                        );
                    })
                }
            </MenuBar>
        </Wrapper>
    );
};

export default MenuExamV2;