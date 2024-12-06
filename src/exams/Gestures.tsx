//Gestures 예제

import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled.div`
    width: 150px;
    height: 150px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const Circle = styled(motion.div)`
    width: 50px;
    height: 50px;
    background-color: rgb(255, 220, 100);
    border-radius: 25px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxVariants = {
    hover: { rotateZ: 90 },
    click: { 
        scale: 1.5, 
        rotateZ: 360,
        color: "white", 
        backgroundColor: "#30336b",
        transition: {
            duration: 0.5
        }
    },
    drag: {
        scale: 0.5,
        borderRadius: "100px",
        border: "2px solid black",
        backgroundColor: "rgb(41, 128, 185)",
    }
};

function Gestures(){
    const BoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <Box ref={BoxRef}>
                <Circle 
                    variants={BoxVariants}
                    drag
                    dragConstraints={BoxRef}
                    dragSnapToOrigin={true}
                />
            </Box>
        </Wrapper>
    );
};

export default Gestures;