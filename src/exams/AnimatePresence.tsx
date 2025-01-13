import styled from "styled-components";
import { BasicExams } from "./BasicExam";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        135deg, rgb(174, 188, 244), rgb(8, 62, 171)
    );
`;

const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 250px;
    height: 150px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    margin-bottom: 5px;
    position: absolute;
`;

const Btns = styled.button`
    width: 70px;
    height: 30px;
    font-size: 16px;
    border: 0px;
    border-radius: 7px;
    position: absolute;
    top: 450px;
    background-color: rgb(174, 188, 244);
`;

const BoxVariants = {
    initial: {
        x: 100,
        opacity: 0,
    },
    showing: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
            duration: 0.5
        }
    },
    exits: {
        x: -200,
        opacity: 0,
        transition: {
            duration: 0.7
        }
    }
};

function PresenceExam(){
    const [Index, setIndex] = useState(0);
    const Sliders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const nextIndex = () => {
        setIndex((value) => value === 9 ? 9 : value + 1);
    };

    return (
        <Wrapper>
            <AnimatePresence>
                {
                    Sliders.map((num) => 
                        Index === num ? (
                            <Box key={num}variants={BoxVariants} initial="initial" animate="showing" exit="exits">
                                {num}
                            </Box>
                        ): null
                    )
                }
                <Btns>◀</Btns>
                <Btns onClick={nextIndex}>▶</Btns>
            </AnimatePresence>
        </Wrapper>
    );
};

export default PresenceExam;