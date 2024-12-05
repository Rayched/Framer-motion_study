//framer-motion 라이브러리
//학습용 TestBox Component

import styled from "styled-components";
import {motion} from "framer-motion";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function TestBox(){
    return (
        <Wrapper>
            <Box 
                initial={{ scale: 0}} 
                animate={{ scale: 1, rotateZ: 360}}
                transition={{type: "spring", delay: 1, duration: 2}}
            />
        </Wrapper>
    );
};

export default TestBox;