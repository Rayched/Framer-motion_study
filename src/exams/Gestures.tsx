//Gestures 예제

import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Box = styled(motion.div)`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
    }
};

function Gestures(){
    return (
        <Wrapper>
            <Box 
                variants={BoxVariants}
                whileHover="hover"
                whileTap="click"
            >A</Box>
        </Wrapper>
    );
};

export default Gestures;