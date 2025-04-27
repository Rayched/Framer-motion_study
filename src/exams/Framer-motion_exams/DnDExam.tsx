import { motion, Reorder, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled(motion.div)`
    width: 320px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const DragItems = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18em;
    height: 5em;
    border-radius: 20px;
    background-color: rgb(194, 190, 195);
    margin: 7px 0px;

    span {
        background-color: inherit;
        font-size: 1.2em;
        font-weight: bold;
    };
    &:hover {
        background-color: rgb(215, 220, 217);
    }
`;

const DragItem_Variants = {
    transition: {
        duration: 1.5
    }
};

function DnDExam(){
    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    useEffect(() => console.log(items));

    return (
        <Wrapper>
            <Box>
                <Reorder.Group axis="y" values={items} onReorder={setItems}>
                    {
                        items.map((item) => {
                            return (
                                <Reorder.Item key={item} value={item}>
                                    <DragItems key={item} variants={DragItem_Variants}>
                                        <span>{"Item 0" + item}</span>
                                    </DragItems>
                                </Reorder.Item>
                            );
                        })
                    }
                </Reorder.Group>
            </Box>
        </Wrapper>
    );
};

export default DnDExam;