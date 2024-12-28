//framer-motion 라이브러리
//학습용 TestBox Component

import styled from "styled-components";
import {motion} from "framer-motion";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #87e4f5, #6bd1e3);
`;

const Box = styled(motion.div)`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const BasicExams = {
    Wrapper: Wrapper,
    Box: Box
}

function BasicExam(){
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

export default BasicExam;