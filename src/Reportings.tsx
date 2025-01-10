//Framer Motion 정리글 용 예제

import { delay, motion } from "framer-motion";
import { start } from "repl";
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
    width: 200px;
    height: 200px;
    background-color: rgba(220, 220, 220, 0.7);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    background-color: rgb(250, 250, 250);
    width: 72px;
    height: 72px;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    place-self: center;
`;

const BoxVariants = {
    start: {
        scale: 0
    },
    end: {
        scale: 1,
        transition: {
            type: "spring",
            delay: 0.8,
            duration: 0.2,
            bounce: 0.5,
            delayChildren: 1.2,
            staggerChildren: 0.4
        }
    }
};

const CircleVariants = {
    start: {
        scale: 0
    },
    end: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.2
        }
    }
};

function Reportings(){
    return (
        <Wrapper>
            <Box variants={BoxVariants} initial="start" animate="end">
                <Circle variants={CircleVariants}/>
                <Circle variants={CircleVariants}/>
                <Circle variants={CircleVariants}/>
                <Circle variants={CircleVariants}/>
            </Box>
        </Wrapper>
    );
}

export default Reportings;
