//Animation Sample
//Variants Example

import { delay, motion } from "framer-motion";
import { start } from "repl";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    background-color: white;
    width: 70px;
    height: 70px;
    border-radius: 35px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    place-self: center;
`;

const BoxVariants = {
    start: {
        opacity: 0,
        scale: 0.5
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            delay: 1,
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 1.2,
            staggerChildren: 0.3
        }
    }
};

const CircleVariants = {
    start: {
        scale: 0,
    },
    end: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.1,
        }
    }
};

function VariantsExam(){
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
};

export default VariantsExam;