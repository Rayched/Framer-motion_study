//Animation Sample
//Variants Example

import { motion } from "framer-motion";
import styled from "styled-components";

const VarSamples = {
    start: {scale: 0},
    end: { 
        scale: 1, 
        rotateZ: 360,
        transition: {
            type: "spring",
            delay: 1,
            duration: 2
        }
    }
};

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
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function VariantsExam(){
    return (
        <Wrapper>
            <Box 
                variants={VarSamples}
                initial={VarSamples.start}
                animate={VarSamples.end}
            />
        </Wrapper>
    );
};

export default VariantsExam;