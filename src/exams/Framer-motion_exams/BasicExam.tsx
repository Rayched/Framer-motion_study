//framer-motion 라이브러리
//학습용 TestBox Component

import styled from "styled-components";
import {delay, motion} from "framer-motion";

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

function BasicExam(){
   return (
    <Wrapper>
        <Box 
            initial={{ scale: 1 }}
            animate={{
                scale: 2,
                rotateZ: 270
            }}
            transition={{
                default: {
                    type: "spring",
                    delay: 2,
                    duration: 0.5
                },
                rotateZ: {
                    delay: 3,
                    duration: 1
                }
            }}
        />
    </Wrapper>
   );
};

export default BasicExam;