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
    background: linear-gradient(135deg, rgb(174, 188, 244), rgb(8, 62, 171));
`;

const Box = styled(motion.div)`
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const BasicExams = {
    Wrapper: Wrapper,
    Box: Box
}

const BoxVariants = {
    start: { scale: 0 },
    end: {
        scale: 1.5,
        rotateZ: 360,
        transition: {
            type: "spring",
            delay: 2,
            duration: 1
        }
    }
};

function BasicExam(){
   return (
    <Wrapper>
        <Box 
            variants={BoxVariants}
            initial="start"
            animate={BoxVariants.end}
        />
    </Wrapper>
   );
};

export default BasicExam;