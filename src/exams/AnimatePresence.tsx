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

const SliderBtns = styled.div`
    width: 160px;
    height: 40px;
    position: absolute;
    top: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0px;
    border-radius: 7px;
    padding: 3px;
    background-color: rgb(43, 97, 207);
`;

const Btns = styled.button`
    width: 70px;
    height: 30px;
    font-size: 16px;
    border: 0px;
    border-radius: 7px;
    background-color: rgb(174, 188, 244);
    margin: 0px 3px;
`;

const BoxVariants = {
    initial: (isBack: boolean) => ({
        //isBack, 이전 버튼 클릭 여부에 따라
        //x의 값이 -100/100으로 바뀌어야 함.
        x: isBack ? -100: 100,
        opacity: 0
    }),

    showing: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6
        }
    },
    exits: (isBack: boolean) => ({
        //isBack, 이전 버튼 클릭 여부에 따라
        //x의 값이 -200/200으로 바뀌어야 함.
        x: isBack ? 200 :-200,
        opacity: 0,
        transition: {
            duration: 0.5
        }
    })
};

function PresenceExam(){
    const [Index, setIndex] = useState(0);
    const [isBack, setBack] = useState(false);
    //[◀] prevBtn(이전 버튼) Click 여부 Check

    const nextIndex = () => {
        setBack(false);
        setIndex((value) => value === 9 ? 0 : value + 1);
    };

    const prevIndex = () => {
        setBack(true);
        setIndex((value) => value === 0 ? 9 : value - 1);
    }

    return (
        <Wrapper>
            <AnimatePresence mode="wait" custom={isBack}>
                <Box 
                    key={Index}
                    variants={BoxVariants} 
                    custom={isBack}
                    initial="initial" 
                    animate="showing" 
                    exit="exits"
                >
                    {Index}
                </Box>
            </AnimatePresence>
            <SliderBtns>
                <Btns onClick={prevIndex}>◀</Btns>
                <Btns onClick={nextIndex}>▶</Btns>
            </SliderBtns>
        </Wrapper>
    );
};

export default PresenceExam;